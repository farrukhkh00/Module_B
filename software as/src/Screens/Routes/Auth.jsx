import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
  return !localStorage.getItem("loginUser")? <Outlet /> :<Navigate to={"/dash"} />;   
};


export default Auth
