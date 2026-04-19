import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-between  bg-black p-5  '>
            <h1>Logo</h1>

            <div className='flex gap-10  '>
                <NavLink className={({ isActive }) => (isActive ? "text-red-600 border border-red-600 p-1 rounded-2xl " : "")} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-600 border border-red-600 p-1 rounded-2xl " : "")} to='/About' >About</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "text-red-600 border border-red-600 p-1 rounded-2xl " : "")} to='/Shop' >Shop</NavLink>
            </div>

            <div className='flex gap-5'>
            <NavLink className={({ isActive }) => (isActive ? "text-red-600 border border-red-600 p-1 rounded-2xl " : "")} to='/Login' >
                <button className='cursor-pointer'>Login</button>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-red-600 border border-red-600 p-1 rounded-2xl " : "")} to='/Mode' >
                <button className='cursor-pointer'>Mode</button>
            </NavLink>
            </div>
            
        </div>
    )
}
export default Navbar
 