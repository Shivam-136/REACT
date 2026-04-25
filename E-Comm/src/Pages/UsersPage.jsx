import React, { useContext, useState } from 'react'
import { Auth } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import { FaUser, FaBox, FaHeart, FaSignOutAlt } from "react-icons/fa";

const UsersPage = () => {
  const { loggedInUser, setLoggedInUser } = useContext(Auth)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("profile")

  if (!loggedInUser) {
    return (
      <div className='text-center mt-20'>
        <h1 className='text-2xl font-bold'>Please Login First</h1>
        <button 
          onClick={() => navigate('/auth')}
          className='mt-5 bg-blue-500 px-4 py-2 rounded text-white'
        >
          Go to Login
        </button>
      </div>
    )
  }

  return (
    <div className='mt-20 min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white flex'>

      {/* 🔥 Sidebar */}
      <div className='w-64 bg-white dark:bg-gray-900 p-6 shadow-lg flex flex-col gap-6'>
        
        <h2 className='text-xl font-bold mb-4'>My Account</h2>

        <button 
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 ${activeTab==="profile" && "text-yellow-400"}`}
        >
          <FaUser /> Profile
        </button>

        <button 
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 ${activeTab==="orders" && "text-yellow-400"}`}
        >
          <FaBox /> Orders
        </button>

        <button 
          onClick={() => setActiveTab("wishlist")}
          className={`flex items-center gap-2 ${activeTab==="wishlist" && "text-yellow-400"}`}
        >
          <FaHeart /> Wishlist
        </button>

        <button 
          onClick={() => {
            localStorage.removeItem('log user')
            setLoggedInUser(null)
            navigate('/auth')
          }}
          className='flex items-center gap-2 text-red-500 mt-10'
        >
          <FaSignOutAlt /> Logout
        </button>

      </div>

      {/* 🔥 Content Area */}
      <div className='flex-1 p-8'>

        {/* 👤 Profile */}
        {activeTab === "profile" && (
          <div className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow'>
            <h1 className='text-2xl font-bold mb-4'>User Profile</h1>
            <p><strong>Name:</strong> {loggedInUser.name}</p>
            <p><strong>Email:</strong> {loggedInUser.email}</p>
          </div>
        )}

        {/* 📦 Orders */}
        {activeTab === "orders" && (
          <div className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow'>
            <h1 className='text-2xl font-bold mb-4'>My Orders</h1>

            <div className='grid md:grid-cols-2 gap-4'>
              <div className='p-4 border rounded hover:shadow-lg transition'>
                <p className='font-semibold'>Order #12345</p>
                <p className='text-green-500'>Delivered</p>
              </div>

              <div className='p-4 border rounded hover:shadow-lg transition'>
                <p className='font-semibold'>Order #67890</p>
                <p className='text-yellow-500'>Pending</p>
              </div>
            </div>
          </div>
        )}

        {/* ❤️ Wishlist */}
        {activeTab === "wishlist" && (
          <div className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow'>
            <h1 className='text-2xl font-bold mb-4'>Wishlist</h1>
            <p className='text-gray-500'>No items in wishlist</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default UsersPage