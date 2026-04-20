import React from 'react'
import { Route, Routes } from "react-router";
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import ProductDetail from '../Pages/ProductDetail';
import UsersPage from '../Pages/UsersPage';

const AppRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/Users' element={<UsersPage />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/ProductDetail' element={<ProductDetail />} />

      </Routes>
    </div>
  )
}

export default AppRoutes
