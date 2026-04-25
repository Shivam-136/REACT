import React, { createContext, useState } from "react";

// ✅ Create Context
export const Auth = createContext();

// ✅ Provider Component
export const AuthContextProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Auth.Provider
      value={{
        registerUser,
        setRegisterUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};