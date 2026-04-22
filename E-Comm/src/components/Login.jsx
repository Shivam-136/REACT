import React from 'react'
import { useForm } from "react-hook-form";

const Login = () => {
   const {register,handleSubmit,reset} = useForm()
  return (
    <div>
        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
            
            reset()
        })}>
            <input {...register('name',{required:'Name is required'})} type="text" placeholder='Name' />
        </form>
    </div>
  )
}

export default Login
