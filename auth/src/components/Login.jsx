import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Auth } from "../context/AuthContext";


const Login = ({ setToggle }) => {

  let { register, handleSubmit, reset } = useForm()

  let { registeredUsers, setLoggedInUser } = useContext(Auth)

  let handleFormSubmit = (data) => {

    let user = registeredUsers.find(
      (u) => u.email === data.email && u.password === data.password
    )

    if (user) {
      alert("Login Successful ✅")
      setLoggedInUser(user)
    } else {
      alert("Invalid Credentials ❌")
    }

    reset()
  }
  return (
    <div>

      <form onSubmit={handleSubmit(handleFormSubmit)} action="" className='flex flex-col bg-gray-600 border border-white-300 justify-center items-center p-4  rounded-2xl '>
        <input {...register("email")} type="email" placeholder='email' />
        <input {...register("password")} type="password" placeholder='password' />
        <button type='submit'> Login</button>
      </form>
      <h1>Don't have an account?</h1>
      <button onClick={() => setToggle(true)}>Go to Register</button>
    </div>
  )
}

export default Login 