const apiKey = "8aa3e88b49274ab6f88a7d3e14657324"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let input = document.querySelector(".search input")

async function showWeather(city_name){

    let cityName = document.getElementById("cityName")
    let temperature = document.getElementById("temp")
    let humidity = document.getElementById("humidity")
    let windSpeed = document.getElementById("wind_speed")
    let weatherIcon = document.querySelector(".weather-icon")
    
    let response = await fetch(apiUrl + city_name + `&appid=${apiKey}`)
    let weather_data = await response.json()
    
    cityName.innerHTML = weather_data.name
    temperature.innerHTML = Math.round(weather_data.main.temp) + "°C"

    humidity.innerHTML = weather_data.main.humidity + "%"
    windSpeed.innerHTML = weather_data.wind.speed + " km/h"

    weatherCondition = weather_data.weather[0].main

    if(weatherCondition == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(weatherCondition == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(weatherCondition == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(weatherCondition == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(weatherCondition == "Haze"){
        weatherIcon.src = "images/haze.png"
    }
    else if(weatherCondition == "Smoke"){
        weatherIcon.src = "images/smoke.png"
    }
    else if(weatherCondition == "Snow"){
        weatherIcon.src = "images/snow.png"
    }
    else if(weatherCondition == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
     
}

