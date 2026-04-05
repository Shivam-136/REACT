import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>App</h1>

      {toggle
        ? <Login setToggle={setToggle} />
        : <Register setToggle={setToggle} />
      }

    </div>
  );
};

export default App;