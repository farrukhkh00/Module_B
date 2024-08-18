import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Edituser = () => {
    const {id} = useParams();
    console.log(id)
    const [editUser,setEditUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get("http://localhost:2020/users/" + id)
          .then((res) => setEditUser(res.data))
          .catch((err) => console.log(err));
      }, []);
    
    const handleSub = (e) => {
        e.preventDefault();
    
        axios
          .put("http://localhost:2020/users/" + id, editUser)
          .then((res) => {
            alert("user updated successfully..");
            navigate("/");
          })
          .catch((err) => console.log(err));
      };
  return (
    <>
       <form onSubmit={handleSub} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
          value={editUser.name}
          onChange={(e)=>setEditUser({...editUser,name:e.target.value})}
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
          value={editUser.username}

          onChange={(e)=>setEditUser({...editUser,username:e.target.value})}
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
          value={editUser.email}

          onChange={(e)=>setEditUser({...editUser,email:e.target.value})}
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone Number
          </label>
          <input
          value={editUser.phone}

          onChange={(e)=>setEditUser({...editUser,phone:e.target.value})}
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Edit
          </button>
        </div>
      </form>
    </>
  )
}

export default Edituser
