import React from 'react'
import App from '../App'

import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <div>
     <Routes>
      <NavLink>to={'/'}Home</NavLink>
      <NavLink>to={'/Shop'}Shop</NavLink>
      <NavLink>to={'/About'}About</NavLink>
     </Routes>
    </div>
  )
}

export default AppRoutes
