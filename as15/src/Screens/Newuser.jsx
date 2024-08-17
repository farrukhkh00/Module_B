import axios from 'axios';
import React, { useState } from 'react'

const Newuser = () => {
    const handleSub =  (e) =>{
        e.preventDefault();
        axios.post('http://localhost:2020/users',UserData)
        .then((res)=>setUserData(res.data))
        .catch((err) => console.log(err))

    }
    let [UserData,setUserData] = useState({
        name: "",
        username : "",
        email: "",
        phone: "",        
    })

  return (
    <>
    
        <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-10">
      <form onSubmit={handleSub} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
          onChange={(e)=>setUserData({...UserData,name:e.target.value})}
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
          onChange={(e)=>setUserData({...UserData,username:e.target.value})}
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
          onChange={(e)=>setUserData({...UserData,email:e.target.value})}
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone Number
          </label>
          <input
          onChange={(e)=>setUserData({...UserData,phone:e.target.value})}
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
   
  
    </>
  )
}

export default Newuser
