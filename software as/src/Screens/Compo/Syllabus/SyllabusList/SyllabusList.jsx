import { collection, getDocs } from 'firebase/firestore'
import {useEffect, React, useState} from 'react'
import { database } from '../../../../Config/firebase'
import { useNavigate } from 'react-router-dom';

const SubjectList = () => {
  const navigate = useNavigate();

  let [data,setData] = useState([])
  useEffect(()=>{
    getData()
      },[])
      const getData = async () =>{
        try{
          const arr = []
          const data = await getDocs(collection(database,"Syllabus"))
          data.forEach((e)=>{
            arr.push({...e.data(),id: e.id})
          });
          setData(arr)
        } catch(err){
          console.log(err)
        }
      }

  return (
    <>
    <div className='d-md-flex justify-content-end me-3 table-resposiveness' >
<div style={{marginTop:"200px",width:"80%"}} >
    <span className='text-center'>

    <h1  className='text-black'> List</h1 >
    <button onClick={()=>navigate("/dash/syllabusForm")} style={{backgroundColor:"#283593"}}>
      <span>Add Syllabus</span>
    </button>

    </span>
    <div style={{overflowX: "auto"}}>
    <table  class="table w-100" style={{overflow:"scroll"}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Subject Name</th>
      <th scope="col">Class</th>
      <th scope="col">Download</th>
    </tr>
  </thead>
  <tbody>
    {
    data.map((e,i)=>{
      return(
        <tr key={i}>
      <th >{e.id}</th>
      <td >{e.subject.class}</td>
      <td>{e.subject.subject}</td>
      <td><span className='btn btn-primary'style={{width:"100%"}} >Download file <a href={e.subject.file}></a></span></td>
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
