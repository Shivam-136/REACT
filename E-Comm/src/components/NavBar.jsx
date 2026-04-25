import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate()
  const { loggedInUser, setLoggedInUser } = useContext(Auth)

  const handleLogout = () => {
    localStorage.removeItem('log user')
    alert('User logged out')
    setLoggedInUser(null)
    navigate('/auth')
  }

  return (
    <div className='fixed top-0 left-0 w-full z-50 flex justify-between items-center p-5 bg-gray-900 text-white shadow-md'>
      
      {/* Logo */}
      <div 
        className='flex items-center gap-2 cursor-pointer'
        onClick={() => navigate('/')}
      >
        <FaShoppingCart className='text-yellow-400 text-2xl' />
        <h1 className='text-xl font-bold tracking-wide'>
          Shivam<span className='text-yellow-400'>Store</span>
        </h1>
      </div>

      {/* Links */}
      {loggedInUser && (
        <div className='flex gap-8 text-lg'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-400" : ""}>
            Home
          </NavLink>
          <NavLink to="/Users" className={({isActive}) => isActive ? "text-yellow-400" : ""}>
            Users
          </NavLink>
          <NavLink to="/Cart" className={({isActive}) => isActive ? "text-yellow-400" : ""}>
            Cart
          </NavLink>
        </div>
      )}

      {/* Auth */}
      <div>
        {loggedInUser ? (
          <button 
            onClick={handleLogout}
            className='bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition'
          >
            Logout
          </button>
        ) : (
          <button 
            onClick={() => navigate('/auth')}
            className='bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition'
          >
            Login
          </button>
        )}
      </div>

    </div>
  )
}

export default Navbar