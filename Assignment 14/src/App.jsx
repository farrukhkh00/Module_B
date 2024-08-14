import React from 'react'
import Home from './Screen/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Screen/Products/Products'
import About from './Screen/About/About'
import InnerPro from './Screen/InnerPro'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/inner/:id" element={<InnerPro />} />


    </Routes>
    </>
  )
}

export default App
