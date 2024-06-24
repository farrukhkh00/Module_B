const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const form = document.getElementById('form')
let search = document.getElementById('search')
let finding_limit;

let getUser = async (username)=>{
    try{
        let response  = await fetch(APIURL + username)
        let data = await response.json()
        main.innerHTML = "<h1>Loading...</h1>"
    
        createUserCard(data)
        getRepos(username)
    }catch (err){
       alert("Some Error Occured")
       
    }
}

let createUserCard = async (user) =>{

    let api2 = "https://api.github.com/rate_limit"
    let response2 = await fetch(api2)
    let data2 = await response2.json()


  if(data2.rate.remaining == 0){
      const cardHTML = `
    <div class="cardErrorInfo" id="card">
        <h2>The limit for finding accounts is finsihed</h2>
        <p>come back after 1 hour to find accounts again</p>
    </div>
    `
    main.innerHTML = cardHTML
    
}
else if(user.name != null){
    let cardHTML = `
    <div class="cardInfo">
    <span class = "gotoProfile w-25">
    <a href='https://github.com/${user.login}' target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i></a>
    </span>            
    
    <div>
    <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    
    
    <div class="user-info pt-5">    
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    
    <ul>
    <li>${user.followers} <strong>Followers</strong></li>
    <li>${user.following} <strong>Following</strong></li>
    <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>
    
    <div id="repos"></div>
    </div>
            </div>
        `
        
        main.innerHTML = cardHTML
        
    }else{
        main.innerHTML = ` <div class="cardInfo">
        <h3 class="text-white fw-bold">This User Does Not Exist</h3>
        </div>`
    }
}

let getRepos = async (username) =>{
    try{
        let response  = await fetch(APIURL + username + '/repos?sort=created')
        let reposData = await response.json()
        let reposEl = document.getElementById('repos')
        
        if(reposData != null){
            reposData.slice(0, 5).forEach(repo => {
            let repoel =  `<a href ='${repo.html_url}' class='repo' target = "_blank">${repo.name}</a>`
            reposEl.innerHTML += repoel    
            })
        }


    }catch (err){
        console.log(err)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault() 
    if(search.value != ""){
        getUser(search.value)
        search.value = ""
    
    }
})
