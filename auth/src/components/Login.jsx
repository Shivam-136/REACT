import React from 'react'
import {useForm} from 'react-hook-form'


const Login = ({ settoggle }) => {

let {register,handalsubmit,reset}=useForm()

let handalFormsubmit = ()=>{

}
  return (
    <div>

    <form onSubmit={handalsubmit} action="" className='flex flex-col bg-gray-600 border border-white-300 justify-center items-center p-4  rounded-2xl '>
      <input {...register("email")} type="email" placeholder='email' />
      <input {...register("password")} type="password" placeholder='password' />
      <button>Create</button>
    </form>

      <h1>Login</h1>
      <button onClick={() => settoggle(false)}>Go to Register</button>
    </div>
  )
}

export default Login 