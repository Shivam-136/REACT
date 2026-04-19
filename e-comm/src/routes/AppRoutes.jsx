import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import Login from '../pages/Login'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Shop/' element={<Shop />} />
        <Route path='About/' element={<About />} />
        <Route path='Login/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;
