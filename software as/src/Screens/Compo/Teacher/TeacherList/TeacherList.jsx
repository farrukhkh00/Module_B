import { collection, getDocs } from 'firebase/firestore'
import {useEffect, React, useState} from 'react'
import { database } from '../../../../Config/firebase'
import { useNavigate } from 'react-router-dom'

const TeacherList = () => {
  let [data,setData] = useState([])
  useEffect(()=>{
    getData()
      },[])
      const getData = async () =>{
        try{
          const arr = []
          const data = await getDocs(collection(database,"Teachers"))
          data.forEach((e)=>{
            arr.push({...e.data(),id: e.id})
          });
          setData(arr)
        } catch(err){
          console.log(err)
        }
      }
      // const navigate = useNavigate();

  return (
    <>
    <div className='d-md-flex justify-content-end me-3 table-resposiveness' >
<div style={{marginTop:"200px",width:"80%"}} >
    <span className='text-center'>

    <h1  className='text-black'> List</h1 >
    <button style={{backgroundColor:"#283593"}}>
      <span>Add Teacher</span>
    </button>

    </span>
    <div style={{overflowX: "auto"}}>
     <table  class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
    data.map((e,i)=>{
      return(
        <tr key={i}>
      <th >{e.id}</th>
      <td >{e.teacher.firstname}</td>
      <td>{e.teacher.lastname}</td> 
      <td>{e.teacher.email}</td>
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

export default TeacherList
