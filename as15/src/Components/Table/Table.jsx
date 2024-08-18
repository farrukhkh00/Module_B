import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Table = ({data}) => {
    const navigate = useNavigate();
   const handleDelete = (id) =>{
    axios
      .delete("http://localhost:2020/users/" + id)
      .then((res) => {
        alert("user is permanently deleted");
      })
      .catch((err) => {
        console.log(err);
      });
   }

  return (
    <>
     

<div class="relative overflow-x-auto shadow-md sm:rounded-lg" style={{marginTop : "100px"}}>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Username
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {
            data.map((e,i)=>{
                return(
                    <tr key={i} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {e.name}
                    </th>
                    <td class="px-6 py-4">
                        {e.username}
                    </td>
                    <td class="px-6 py-4">
                        {e.email}
                    </td>
                    <td class="px-6 py-4">
                        {e.phone}
                    </td>
                    <td class="px-6 py-4">
                        <span style={{cursor : "pointer"}} onClick={()=> navigate(`/edituser/${e.id}`)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</span>
                        <MdDelete onClick={()=> handleDelete(e.id)} style={{fontSize : "30px", color : "red", cursor : "pointer"}}/>
                    </td>
                </tr>
                )
            })
           }
        </tbody>
    </table>
</div>
 
    </>
  )
}

export default Table
