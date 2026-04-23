import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";

const Login = ({setToggle}) => {

  const {registerUsers , setLoggedInUser, } = useContext(Auth)

  const {
    register, handleSubmit,reset, formState:
    { errors, isValid }, } = useForm({ mode: "onChange" });

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl flex flex-col gap-5"
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            {...register("email", {
              required: "Email is required",
            })}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "At least 6 characters are required",
              },
            })}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`py-2 rounded-lg text-white font-semibold transition ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Login
        </button>
        
        <p className="text-sm text-center text-gray-500">

          Don't have an account?{" "}

          <span   onClick={() => setToggle(true)} className="text-blue-600 cursor-pointer hover:underline">
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login