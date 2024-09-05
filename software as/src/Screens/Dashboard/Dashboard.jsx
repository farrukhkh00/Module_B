import React from 'react'
import Sidebar from '../Compo/Sidebar/Sidebar'
import Navbar from '../Compo/Navbar'
import RegistrationForm from '../Compo/Student/RegisterationForm/Rform'
import StudentList from '../Compo/Student/StudentList/StudentList'
import { useLocation } from 'react-router-dom'
import Student from '../Compo/Student/Student'

const Dashboard = () => {
  let location = useLocation()
  return (
    <>
    
       <Sidebar />
       {location.pathname === "/dash" ? <StudentList /> : null}
       {/* <StudentList/> */}
    </>
  )
}

export default Dashboard



