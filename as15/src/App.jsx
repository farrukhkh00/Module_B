import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Newuser from './Screens/Newuser'
import Edituser from './Screens/Edituser'

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/newuser' element={<Newuser/>}/>
        <Route path='/edituser/:id' element={<Edituser/>}/>
      </Routes>
    </>
  )
}

export default App
