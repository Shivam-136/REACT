import React, { useContext } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Auth } from "./context/AuthContext";

const App = () => {

  const { toggle, setToggle, registeredUsers, setLoggedInUser } = useContext(Auth);

  let lsd = JSON.parse(localStorage.getItem("log user"));

  return (
    <div>

      {toggle
        ? <Register setToggle={setToggle} />
        : <Login setToggle={setToggle} />
      }

      {lsd ? (
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("log user");
              setLoggedInUser(null);
            }}
          >
            Logout
          </button>

          <div>
            {registeredUsers.map((elem, index) => (
              <h1 key={index} className="text-2xl font-bold">
                {elem.name}
              </h1>
            ))}
          </div>
        </div>
      ) : (
        <h1>Please login first</h1>
      )}

    </div>
  );
};

export default App;