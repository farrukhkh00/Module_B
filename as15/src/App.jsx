import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Table from './Components/Table/Table'
import Home from './Screens/Home'
import Newuser from './Screens/Newuser'

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/newuser' element={<Newuser/>}/>
      </Routes>
    </>
  )
}

export default App
