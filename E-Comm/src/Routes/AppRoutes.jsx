import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import CartPage from "../pages/CartPage";
import ProductDetails from "../pages/ProductDetail";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;