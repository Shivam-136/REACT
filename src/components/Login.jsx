import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Auth } from "../context/AuthContext";
const Login = ({ setToggle }) => {

  let { register, handleSubmit, reset, formState: { errors, isValid } } =
    useForm({ mode: 'onChange' })

  let { registeredUsers, setLoggedInUser } = useContext(Auth)

  let handleFormSubmit = (data) => {
    let user = registeredUsers.find(
      (u) => u.email === data.email && u.password === data.password
    )

    if (user) {
      alert("Login Successful ✅")
      setLoggedInUser(user)
      localStorage.setItem("log user", JSON.stringify(user)) // ✅ add
    } else {
      alert("Invalid Credentials ❌")
    }
    reset()
  }

  return (
    <div className=' bg-gray-400 w-full flex flex-col items-center justify-center' >
      <h1>Login</h1>

      <form   
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex bg-white w-[40%] p-10 rounded-xl border-2 border-gray-400  flex-col gap-4"
      >
        <input className='outline-0 px-4 py-2 rounded border border-black/50'
          {...register("email",{ required: "Email is required " })} type="email" placeholder='email' />
        {errors.email && <p className="text-red-500" >{errors.email.message}</p>}


        <input className='outline-0 px-4 py-2 rounded border border-black/50'
          {...register("password",{ required: "Email is required " })} type="password" placeholder='password' />
        {errors.password && <p className="text-red-500" >{errors.password.message}</p>}


        <button disabled={!isValid} 
         className="py-4 bg-blue-500 text-white rounded-xl" 
          type="submi">Create</button>

      <div>
          <p> Don't have an account?{" "}
          <span onClick={()=>setToggle(true)}className="cursor-pointer text-blue-600"> 
         Register here
            </span>
          </p>
        </div>
       </form>
     </div>
   )
 }
  
export default Login




// return (
//     <div className=" bg-gray-400 w-full flex flex-col items-center justify-center">

//       <form onSubmit={handleSubmit(handleFormSubmit)} action=""
//         className="flex bg-white w-[40%] p-10 rounded-xl border-2 border-gray-400  flex-col gap-4"
//       >

//         <input
//           {...register("name", {
//             required: "Name is required",
//           })}
//           className="outline-0 px-4 py-2 rounded border border-black/50"
//           type="text"
//           placeholder="name"
//         />
//         {errors.name && <p className="text-red-500" >{errors.name.message}</p>}

//         <input className='outline-0 px-4 py-2 rounded border border-black/50'
//           {...register("email",{ required: "Email is required " })} type="email" placeholder='email' />
//         {errors.email && <p className="text-red-500" >{errors.email.message}</p>}


//         <input className='outline-0 px-4 py-2 rounded border border-black/50'
//           {...register("password" , {required: "Password is required"})} type="password" placeholder='password' />
//         {errors.password && <p className="text-red-500" >{errors.password.message}</p>}

        

//                 <button disabled={!isValid}
//           className="py-4 bg-blue-500 text-white rounded-xl"
//           type="submi">Create</button>


//            <div>
//           <p>Already have account{" "}?
//             <span onClick={() => setToggle(true)}
//               className="cursor-pointer text-blue-600"
//             >
//               Register here
//             </span>
//           </p>
//         </div>

//       </form>
    
//     </div>
//   )
// }





















