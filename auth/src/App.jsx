import React, { useContext } from "react";
import Login from './components/Login'
import Register from "./components/Register"
import { Auth } from "./context/AuthContext";

const App = () => {

  let { toggle, setToggle } = useContext(Auth);

  return (
    <div>
      {toggle 
        ? <Register setToggle={setToggle} />:<Login setToggle={setToggle} />
      }
    </div>
  )
}

export default App