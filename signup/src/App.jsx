import React, { useState } from "react";

const App = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center 
     from-indigo-500 via-purple-500 to-pink-500">

      <div className="backdrop-blur-lg bg-white/20 border border-white/30 
      shadow-2xl rounded-3xl p-8  text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h1>

        {/* Signup Fields */}
        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 p-3 rounded-xl bg-white/30 
            placeholder-white outline-none"
          />
        )}

        {/* Common Fields */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 rounded-xl bg-white/30 
          placeholder-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded-xl bg-white/30 
          placeholder-white outline-none"
        />

        {/* Button */}
        <button className="w-full py-3 rounded-xl 
         from-indigo-600 to-purple-600 
        hover:scale-105 transition-all duration-300 font-semibold">
          {isSignup ? "Sign Up" : "Login"}
        </button>

        {/* Toggle */}
        <p className="text-center mt-5 text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}

          <span
            onClick={() => setIsSignup(!isSignup)}
            className="ml-2 font-semibold cursor-pointer hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default App;