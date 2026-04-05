import React from 'react'

const Register = ({setToggle}) => {
  return (
    <div>
      <h1 >register</h1>
        <button onClick={()=>{setToggle(true)}} >Register</button>
    </div>
  )
}

export default Register
