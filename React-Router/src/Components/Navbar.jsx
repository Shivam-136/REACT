import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-between items-centerp p-6 '>
            <h1>Logo</h1>
            <div className='flex gap-10'>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/shop"> Shop </NavLink>
                <NavLink to="/about"> About </NavLink>
            </div>
            <div>Sign in</div>
        </div>
    )
}

export default Navbar;