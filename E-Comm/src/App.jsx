import React from 'react'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './Components/Navbar'



const App = () => {

  return (
    <div>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App;
