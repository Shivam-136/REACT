import React from 'react'
import { Route, Routes } from "react-router";
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import About from '../Pages/About';

const AppRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='Shop/' element={<Shop />} />
        <Route path='About/' element={<About />} />

      </Routes>
    </div>
  )
}

export default AppRoutes
