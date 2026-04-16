import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-between items-centerp p-6 shadow-md bg-blue-800'>
            <h1>Logo</h1>
            <div className='flex gap-10'>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/"> Home </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/shop"> Shop </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "")} to="/about"> About </NavLink>
            </div>
              <div>
        <button>Login</button>
      </div>
        </div>
    )
}
export default Navbar;