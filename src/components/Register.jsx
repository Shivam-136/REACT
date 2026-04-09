import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Auth } from "../context/AuthContext";

const Register = ({ setToggle }) => {

  let { register, handleSubmit, reset, formState: { errors, isValid } } =
    useForm({ mode: 'onChange' })

  let { registeredUsers, setRegisteredUsers } = useContext(Auth)

  let handleFormSubmit = (data) => {
    let arr = [...registeredUsers, data]   // ✅ FIXED
    setRegisteredUsers(arr)

    localStorage.setItem("users", JSON.stringify(arr))
    reset()
  }

  return (
    <div className="bg-gray-400 w-full flex flex-col items-center justify-center">
      <h1>Register</h1>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex bg-white w-[40%] p-10 rounded-xl border-2 border-gray-400 flex-col gap-4"
      >

        <input
          {...register("name", { required: "Name is required" })}
          className="outline-0 px-4 py-2 rounded border border-black/50"
          type="text"
          placeholder="name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email", { required: "Email is required" })}
          className="outline-0 px-4 py-2 rounded border border-black/50"
          type="email"
          placeholder="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("password", { required: "Password is required" })}
          className="outline-0 px-4 py-2 rounded border border-black/50"
          type="password"
          placeholder="password"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button
          disabled={!isValid}
          className="py-4 bg-blue-500 text-white rounded-xl"
          type="submit"   // ❌ submi -> ✅ submit
        >
          Create
        </button>

        <div>
          <p>
            Already have account?{" "}
            <span
              onClick={() => setToggle(false)}
              className="cursor-pointer text-blue-600"
            >
              Login here   {/* ❌ text bhi galat tha */}
            </span>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Register;