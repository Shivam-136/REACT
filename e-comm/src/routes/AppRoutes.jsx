import React from 'react'
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
