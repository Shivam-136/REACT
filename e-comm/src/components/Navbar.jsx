import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-between bg-blue-400 p-3  '>
            <h1>Logo</h1>
            <div className='flex gap-3 '>
                <NavLink className={({ isActive }) => (isActive ? "bg-red-600 rounded-full px-3" : "")} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "bg-red-600 rounded-full px-3" : "")} to='/About' >About</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "bg-red-600 rounded-full px-3" : "")} to='/Shop' >Shop</NavLink>
            </div>
            <NavLink className={({ isActive }) => (isActive ? "bg-red-600 rounded-full px-3 " : "")} to='/Login' >
                <button className='cursor-pointer'>Login</button>
            </NavLink>
        </div>
    )
}

export default Navbar
