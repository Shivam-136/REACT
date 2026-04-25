import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { nanoid } from "nanoid";

const Register = ({ setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const { registerUser, setRegisterUser } = useContext(Auth);

  const handleFormSubmit = (data) => {
    const updatedUsers = [...registerUser, { ...data, id: nanoid() }];
    setRegisterUser(updatedUsers);
    localStorage.setItem("reg users", JSON.stringify(updatedUsers));
    alert("User Registered ✅");
    reset();

  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center px-44">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl flex flex-col gap-5"
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <input
            {...register("name", { required: "Name is required" })}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            {...register("email", { required: "Email is required" })}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
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
          Create Account
        </button>

        {/* Switch */}
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => setToggle(false)}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;