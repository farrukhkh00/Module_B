import React from 'react'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App
