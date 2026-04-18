import React from 'react'
import {NavLink} from 'react-router'

const Navbar = () => {
  return (
    <div>
      <NavLink className={({isActive})=>(isActive)?"text-red-500" : ""} to={'/'} >Home</NavLink>
    </div>
  )
}

export default Navbar
