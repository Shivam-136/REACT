import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Auth } from '../context/AuthContext'

const Navbar = () => {
   
  let navigate = useNavigate()
  const {loggedInUser, setLoggedInUser} = useContext(Auth)
    return (
        
        <div className='flex justify-between items-centerp p-6 bg-black text-white'>
            <h1>Logo</h1>

           {loggedInUser ?  <div className='flex gap-10'>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/Users">Users </NavLink>
                <NavLink to="/Cart">Cart </NavLink>
            </div> : null}

           
              <div>
                {loggedInUser 
                ? <button onClick={()=>{
                 localStorage.removeItem('log user')
                 alert ('user logged out')
                 setLoggedInUser(null)
                 navigate("/auth");
                }}>Logout</button>:
                <button onClick={()=>navigate('/auth')} className='px-5 py-2 rounded-2xl cursor-pointer'>
                 Login
                </button>
                } 
              </div>
            
        </div>
    )
}
export default Navbar;