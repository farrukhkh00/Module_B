import { collection, getDocs } from 'firebase/firestore'
import {useEffect, React, useState} from 'react'
import { database } from '../../../../Config/firebase'
import { useNavigate } from 'react-router-dom'
import './tableresponsiveness.css'
const SubjectList = () => {
  let [data,setData] = useState([])
  useEffect(()=>{
    getData()
      },[])
      const getData = async () =>{
        try{
          const arr = []
          const data = await getDocs(collection(database,"ClassAdmission"))
          data.forEach((e)=>{
            arr.push({...e.data(),id: e.id})
          });
          setData(arr)
        } catch(err){
          console.log(err)
        }
      }
      const navigate = useNavigate();
  return (
    <>
   
    <div className='d-md-flex justify-content-end me-3 table-resposiveness' >
<div style={{marginTop:"200px",width: "80%"}} >
    <span className='text-center'>

    <h1  className='text-black'> List</h1 >
    <button onClick={()=>navigate("/dash/AdmissionForm")} style={{backgroundColor:"#283593"}}>
      <span >Addmission Form</span>
    </button>

    </span>
  <div style={{overflowX: "auto"}}>
  <table  class="table w-100" style={{overflow:"scroll"}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Date of birth</th>
    </tr>
  </thead>
  <tbody>
    {
    data.map((e,i)=>{
      return(
        <tr key={i}>
      <th >{e.id}</th>
      <td >{e.form.firstname}</td>
      <td>{e.form.lastname}</td>
      <td>{e.form.phone}</td>
      <td>{e.form.dateofbirth}</td>
    </tr>
      )
    })
   }
  </tbody>
</table> 
  </div>
</div>

</div>
    
    </>

  )
}

export default SubjectList
