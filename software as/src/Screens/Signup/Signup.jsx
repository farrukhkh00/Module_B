import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/googleicon.png'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth,provider} from '../../Config/firebase';

const Signup = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

// Google handle login
  const handleGoogle = ()=>{
    signInWithPopup(auth,provider)
    .then((res)=>{
      {
        alert("login succesfull");
        navigate("/dash")
      }
    })
    .catch((err)=>{
      alert('unsuccessfull atempt')
    })
  }
// Signup Auth
  const handleSignup = (e) =>{
    e.preventDefault()

    createUserWithEmailAndPassword(auth,email,password)
    .then((res)=>{
        alert('User created')
        navigate('/')
    })
    .catch((err)=>{
      console.log(err)
      alert(err.toString().slice(37,-2))}
    
    )
  }
// For Navigation
  const navigate = useNavigate();
  return (
    <>
     <div className="signup-form-container">
      <div className='signup-form'>

      
      <form onSubmit={handleSignup} className="">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
          onChange={(e)=>setName(e.target.value)}
          style={{marginLeft : "-10px"}}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
          onChange={(e)=>setUsername(e.target.value)}
          style={{marginLeft : "-10px"}}
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
          style={{marginLeft : "-10px"}}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
          onChange={(e)=>setPassword(e.target.value)}
          style={{marginLeft : "-10px"}}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit" className="submit-buttonL">Sign Up</button><br/>
    
    <hr />
    <div className='text-center'>
    <span>
        Already have an account? 
    </span>
    </div>
    <br /> 
      </form>
      <div className='row'>
            <div className='col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <button onClick={handleGoogle}  className="submit-button2 logingoogle">
                        <img style={{width: "20px"}} src={icon}></img> Login with Google 
                    </button>
            </div> <br /><br /> 
            <div className='col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <button onClick={()=>navigate('/')} className="submit-button2">
                        Login
                    </button>
            </div>
       
        </div>
        </div>
    </div> 
    </>
  )
}

export default Signup
