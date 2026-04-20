import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-between items-centerp p-6 bg-black text-white'>
            <h1>Logo</h1>
            <div className='flex gap-10'>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/Users">Users </NavLink>
                <NavLink to="/Cart">Cart </NavLink>
            </div>
            <div>
                <button className="px-5 py-2 rounded cursor-pointer">Login</button>
            </div>
        </div>
    )
}
export default Navbar;