import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    let navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <h1 className='bg-red-300 w-2xs text-center'>Hello bhaiyo</h1>
      <button onClick={() => navigate("/about")}>Go to Shop</button>
    </div>
  )
}

export default Home
