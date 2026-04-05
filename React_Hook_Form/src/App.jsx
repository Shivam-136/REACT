import React from 'react'
import { useForm } from "react-hook-form";
const App = () => {

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm();

  return (
    <div>
      <h1>React_Hook_Form</h1>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
        reset()
      })} action="">
        <input {...register('name',{ required: "Name is reqired" })} type="text" placeholder='name ' /><br /><br />
        {errors.name && <p>{errors.name.message}</p>}

        <input {...register('email', { required: "email is reqired" })} type="text" placeholder='email' /><br /><br />
        {errors.email && <p>{errors.email.message}</p>}

        <input {...register('mobile', { required: "mobile is reqired" })} type="text" placeholder='mobile' /><br /><br />
        {errors.mobile && <p>{errors.mobile.message}</p>}

        <input {...register('password', { required: "password is reqired" })} type="password" placeholder='password' /> <br /><br />
        {errors.password && <p>{errors.password.message}</p>}

        <button disabled={!isValid} >Submit</button>
      </form>
    </div>
  )
}

export default App