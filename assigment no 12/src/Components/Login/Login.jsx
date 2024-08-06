import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
  let navigate = useNavigate()
  let [loginInfo, setLoginInfo] = useState({
    email : "",
    pass : "",
  })
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(localStorage.getItem("email") === loginInfo.email && localStorage.getItem("password") === loginInfo.pass){

      Swal.fire({
        title: "Succesfully Loggedin",
        text: "Dashboard unlocked",
        icon: "success",
        timer : 1000
      });

      setTimeout(() => {
      navigate('/dashboard');
      }, 2000);

    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email or Password!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      
    }
  }
  return (
    <>
      <h1 className='text-center text-4xl font-extrabold dark:text-white mt-5' >Login </h1>
      <br /><br /><br /><br />

<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input value={loginInfo.email} onChange={(e)=> setLoginInfo({...loginInfo, email : e.target.value})} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input value={loginInfo.value} onChange={(e)=> setLoginInfo({...loginInfo, pass : e.target.value})} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<div className='text-center mt-8'>Don't have an account <Link style={{color : "blue"}} to='/'>Signup?</Link></div>

    </>
  )
}

export default Login
