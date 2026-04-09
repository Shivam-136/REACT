import { createContext, useState } from "react";

export const Auth = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Auth.Provider
      value={{
        toggle,
        setToggle,
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};