import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import About from '../Pages/About'
import ProductDetail from '../Pages/ProductDetail'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/About' element={<About />} />
        <Route path="/pd/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;
