import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import CartPage from "../pages/CartPage";
import ProductDetails from "../pages/ProductDetail";
import AuthPage from "../Pages/AuthPage";
import PublicRoutes from "../components/PublicRoutes";
import ProctedRoute from "../components/ProtectedRoute";



const AppRoutes = () => {
  return (
    <div>
      <Routes>

        <Route element={<PublicRoutes />}>
          <Route path="/auth" element={<AuthPage />} />
        </Route>

        <Route element={<ProctedRoute/>}>

          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/products/details/:id" element={<ProductDetails />} />

      </Routes>
    </div>
  );
};

export default AppRoutes;