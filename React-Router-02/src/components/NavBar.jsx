import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-between items-centerp p-6 shadow-md bg-blue-800'>
            <h1 className='bg-black text-white px-2 p-2 rounded-2xl'>SHIVAM_K</h1>
            <div className='flex gap-10'>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500 border border-1.2 p-2 rounded-2xl" : "")} to="/"> Home </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500 border border-1.2 p-2 rounded-2xl" : "")} to="/shop"> Shop </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500 border border-1.2 p-2 rounded-2xl" : "")} to="/Cart"> Cart </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-500 border border-1.2 p-2 rounded-2xl" : "")} to="/about"> About </NavLink>
            </div>
              <div>
        <button>Login</button>
      </div>
        </div>
    )
}
export default Navbar;