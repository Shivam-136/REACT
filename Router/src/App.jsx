import React from 'react'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import AppRoutes from './Routefy3s/AppRoutes'



const App = () => {
  return (
    <div>
      <h1 className='bg-red-200' >app</h1>
      <Home/>
      <Shop/>
      <About/>
      <AppRoutes/>
    </div>
  )
}

export default App
