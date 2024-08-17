import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '../Components/Table/Table';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let [Data,setData] = useState([]);
    useEffect(()=>{
        fetched()
},[])
    const fetched = () =>{
        axios.get('http://localhost:2020/users')
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
    const handleNav = useNavigate()
    console.log(Data)
  return (
    <>

<button onClick={()=>handleNav('/newuser')}  type="button" style={{marginTop : "30px"}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create new user</button>
      <Table data={Data}/>
    </>
  )
}

export default Home
