import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci"
import { MdDelete } from "react-icons/md";

import { IoMdAddCircle } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import db from '../Config/firebase';
import { FcDeleteDatabase } from 'react-icons/fc';

const Home = () => {
  
  let [inputData,setInputData] = useState("");
  let [todoData,setTodoData] = useState([])
// Add func
  const add = async ()=>{
    try{
      const addData = await addDoc(collection(db,"collections"),{todo: inputData})
      alert("Data Added")
   } catch(err){
    console.log(err)
  }
}
// Render Func
  useEffect(()=>{
getData()
  },[])
  const getData = async () =>{
    try{
      const arr = []
      const data = await getDocs(collection(db,"collections"))
      data.forEach((e)=>{
        arr.push({...e.data(),id: e.id})
      });
      setTodoData(arr)
    } catch(err){
      console.log(err)
    }
  
  }
  // Edit func
  const EditData = async (id) => {
    console.log("id", id);

    let updateVal = prompt("Enter edit value");

    let updateObj = {
      todo: updateVal,
    };

    const updateData = await updateDoc(doc  (db, "collections", id), updateObj);

    console.log("updateData", updateData);
  };
  // Delete single func
    const DeleteData = async (id) => {
    const deleteUser = await deleteDoc(doc(db, "collections", id));
  };
// Delete All
  const deleteAll = async ()=>{
    try{

      const data = await getDocs(collection(db,"collections"))
      data.forEach((e,i)=>{
        deleteDoc(doc(db,"collections",e.id))
        alert("All data deleted ")
        })
    } catch(err){
      console.log(err)
    }
      
  }
  return (
    <>
    <div style={{textAlign : "center"}}>
     <h1>To Do App</h1> 
     <div className='mt-5'>

     <span className='me-3 '>
     <input
     value={inputData}
     onChange={(e)=>setInputData(e.target.value)}
     style={{paddingRight:"100px",}} 
     type="text"
      name=""
       id="" 
       />
     </span>
       <span>

       <IoMdAddCircle onClick={add} className='fs-2' style={{color:"blue",cursor:"pointer"}}/>
       </span>
       <span className='ms-2'>
        <MdDelete onClick={deleteAll} className='fs-2' style={{color:"red",cursor:"pointer"}}/>
       </span>
     </div>
   
   {
    todoData.map((e,i)=>{
      return(
        <li key={i}>
          {e.todo}
          <CiEdit onClick={()=>EditData(e.id)}  style={{cursor:"pointer"}}/>
            <FcDeleteDatabase style={{cursor:"pointer"}} onClick={()=>DeleteData(e.id)} />
          </li>
      )
    })
   }
    </div>
    </>
  )
}

export default Home
