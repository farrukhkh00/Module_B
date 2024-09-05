import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const DashAuth = () => {
  return (
     localStorage.getItem("loginUser") ? <Outlet /> : <Navigate to={"/"} />
  )
}

export default DashAuth
