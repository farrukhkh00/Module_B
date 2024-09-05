import { collection, getDocs } from 'firebase/firestore'
import {useEffect, React, useState} from 'react'
import { database } from '../../../../Config/firebase'
import { useNavigate } from 'react-router-dom'

const StudentList = () => {
  let [data,setData] = useState([])
  useEffect(()=>{
    getData()
      },[])
      const getData = async () =>{
        try{
          const arr = []
          const data = await getDocs(collection(database,"Students"))
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
<div style={{marginTop:"200px",width:"80%"}} >
    <span className='text-center'>

    <h1  className='text-black'> List</h1 >
    <button onClick={()=>navigate("/dash/studentRegis")} style={{backgroundColor:"#283593"}}>
      <span>Add Student</span>
    </button>

    </span>
    <div style={{overflowX: "auto"}}>
    <table  class="table w-100" style={{overflow:"scroll"}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
    {
    data.map((e,i)=>{
      return(
        <tr key={i}>
      <th >{e.id}</th>
      <td >{e.student.firstname}</td>
      <td>{e.student.lastname}</td>
      <td>{e.student.email}</td>
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

export default StudentList
