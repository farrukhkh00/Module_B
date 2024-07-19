import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDelete } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";




const TodoApp = () => {
    let [inpvalue,setInputvalue] = useState();
    let [inparr,setInputArr] = useState([]);
    
    const add = () =>{
        if (inpvalue) {
            
            setInputArr([...inparr,inpvalue])

        }
    }
    const delAll = () =>{
            setInputArr([])
    }
    const delSingle = (index) =>{
        let checkEle = inparr.filter((ele,i)=>{
           return 
        })

        console.log(checkEle)
          let filteredElem =  inparr.filter((elem,i)=> i!== index)
            setInputArr(filteredElem)

    }

    

  return (
    <div >
      <div className='mt-5 d-flex  text-center justify-content-center flex-column'>
        <h1  className='me-5'>Todo App</h1> 
        <div>
        <input type="text" onChange={(e)=>setInputvalue(e.target.value)} className='w-25 text-center fs-3' placeholder='Enter text'/>
        <IoIosAddCircle onClick={add} className='display-6 mb-3 text-primary'/>
        <MdDelete onClick={delAll} className='display-6 mb-3 ms-2 text-danger'/>

        </div>
            {
                inparr.map((ele,index)=>{
                
                    return(
                        <li className='fs-3' key={index }>
                            {ele}
                            <FaDeleteLeft className='ms-3' onClick={()=>delSingle(index)} />
                        </li>
                    )
            } )
        }
            


        
      </div>
    </div>
  )
}

export default TodoApp
