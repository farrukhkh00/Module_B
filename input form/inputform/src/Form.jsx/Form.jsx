import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuestionCircle } from "react-icons/fa";
import styles from "./Form.module.css"

const Form = () => {
  const [Fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Orgname,setOrgName] = useState('');
  const [Size,setSize] = useState('');
  const [Industry,setIndustry] = useState('');
  const [arrdata,setArrData] = useState([]);

  let notclick = (e) => {
    e.preventDefault()
    let obj = {
      Fname: Fname,
      Lname: Lname,
      Email: Email,
      Password: Password,
      Orgname: Orgname,
      Size: Size,
      Industry: Industry
      }
    
      setArrData(prevState => [...prevState, obj])

  }
   
  return (
    <div className='d-flex flex-column align-items-center'>
      <div>
      <p className='text-center fs-4'>Try <b>Sign</b> free for 14 days</p>
      </div>
    
      <div>
      <p className='text-center fs-5 mt-4'>Already have a formstack account?<a className='text-decoration-none' href=""> Start your trial in app <FaQuestionCircle/> </a></p>
      </div>
      
      <div className='mt-3'>
      <div className='mb-4 d-flex justify-content-center border border-black p-4'>
        <form action="" onSubmit={notclick}>
            <div>
            <div className='d-md-flex gap-2'>
                <div className='mb-3'>
                 <span className='fs-4'>First name</span><br/>
                <input value={Fname} onChange={(e)=>{setFName(e.target.value)}} className='fs-4' required type="text"   />
                </div>

                <div>
                 <span className='fs-4'>Last name</span><br/>
                <input value={Lname} onChange={(e)=>{setLName(e.target.value)}} className='fs-4' required type="text"   />
                </div> 
            </div>
            <div>
            <div className='mb-3'>
                <span  className='fs-4 '>Work email</span><br/>
                <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} className='fs-4 w-100' required type="email"   />
            </div>

                <div className='mb-3'>
                <span  className='fs-4 '>Password</span><br/>
                <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} className='fs-4 w-100' required type="password"   />
                </div>

                <div className='mb-3'>
                <span  className='fs-4 '>Organization name</span><br/>
                <input value={Orgname} onChange={(e)=>{setOrgName(e.target.value)}} className='fs-4 w-100' required type="text"   />
                </div>

                <div className='mb-3'>
                <span  className='fs-4 '>Organization Size</span><br/>
                <select onChange={(e)=>{setSize(e.target.value)}} required className='w-100 fs-4'  >
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                </select>

                
                </div>

                <div className='mb-3'>
                <span  className='fs-4'>Industry</span><br/>
                <select onChange={(e)=>{setIndustry(e.target.value)}}  className='w-100 fs-4 '  >
                    <option value="Cyber security">Cyber security</option>
                    <option value="Web n mobile">Web n mobile</option>
                    <option value="other">other</option>
                </select>

                
                </div>
                <div>
                  <p>Formstack has updated our Terms of services effective Jan 4, 2023. <br />We encourage you to read the document in its entirely</p>
                </div>
                <div>
                  <input type="checkbox"   /> I understand and agree to the <a href="">Formstack Privacy Policy, Software <br /> Services Agreement</a> and <a href="">Acceptable use policy</a>
                </div>
                <div>
                  <button className='w-100 mt-4 p-2 text-white bg-primary' type='submit'>Start free trial</button>
                </div>
            </div>
            </div>
        </form>
      </div>

      <div className='text-center'>
        <div><h1>Form Data:</h1></div>
        
           <ul>
           {
           arrdata.map((e, i) => (
            <div className='fs-5'>
              <li key={i}>
                Student ID: {i} <br/>
                First Name: {e.Fname}<br/>
                Last Name: {e.Lname}<br/>
                Email: {e.Email} <br/>
                Password: {e.Password} <br/>
                Organization Name: {e.Orgname} <br/>
                Organization Size: {e.Size}<br/>
                Industry: {e.Industry}
             </li>

             <br/>
            </div>
           
           ))}
         </ul>
  
        
      </div>
      </div>
    </div>
  )
}

export default Form
