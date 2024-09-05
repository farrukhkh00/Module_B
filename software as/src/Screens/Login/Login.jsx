import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/googleicon.png'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {  createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth,  provider } from '../../Config/firebase';
const Login = () => {

  const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 
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
 const handleSubmit = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((res)=>{
        alert('successfully login')
        localStorage.setItem('loginUser',email)
        navigate('/dash')
        
    }).catch((err)=>{
      console.log(err)
      alert('invalid email or password')
    })
  }

  const navigate = useNavigate()
  return (
    <div className='login-form-container '>
    <div className='container ' >
        <div className='row'>
            <div className='col col-12 col-md-6 col-lg-6 col-xl-6'>
                <br /><br /> <br /> <br /> 
                <h1 className='display-4 fw-bold' style={{color:"#283593"}}>
                EduPulse
                </h1>
                <p className='fs-2' style={{color:"#1C1E21"}}>Staying in tune with the heartbeat of educational management.</p>
            </div> 
            <div className='col col-12 col-md-6 col-lg-6 col-xl-6'>
            <div className="login-form"> <br />

      <form  onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
          placeholder='Email'
            type="email"
            id="email"
            name="email"
          onChange={(e)=>setEmail(e.target.value)}
         
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
           placeholder='Password'  
            type="password" 
            id="password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}

            required
            
          />
          
         
        </div>
        <button type="submit" className="submit-button">Login</button>
        <div className='text-center pt-4'>
        <span className='f_p' onClick={()=>navigate('/forgotps')}>Forgotten password?</span>

        </div>

        <hr />
        
        
      </form>
      <div className='row'>
            <div className='col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <button  onClick={handleGoogle} className="submit-button2 logingoogle">
                        <img style={{width: "20px"}} src={icon}></img> Login with Google 
                    </button>
            </div> <br /><br /> 
            <div className='col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <button onClick={()=>navigate('/signup')} className="submit-button2">
                        Signup
                    </button>
            </div>
        </div>
      
      </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Login
