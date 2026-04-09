import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Auth } from "../context/AuthContext";

const Register = ({ setToggle }) => {

  let { register, handleSubmit, reset } = useForm()

  let { registerUsers, setRegisterUsers } = useContext(Auth)
  let handleFormSubmit = (data) => {

    let arr = [...registerUsers, data]
    setRegisterUsers(arr)
    reset()
    setToggle(false)

  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='flex flex-col bg-gray-600 border border-white-300 justify-center items-center p-4 rounded-2xl'
      >
        <input {...register("email")} type="email" placeholder='email' />
        <input {...register("password")} type="password" placeholder='password' />
        <button className='bg-red-200' type="submit">Create</button>
      </form>

      <h1>Already have account?</h1>
      <button className='border rounded-2xl p-1.5 pointer-co '
        onClick={() => setToggle(false)}>Go to Login</button>
    </div>
  )
}

export default Register;