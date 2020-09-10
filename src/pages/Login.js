import React, { useState } from "react";
import loginUser from "../mutations/loginMutation";
import registerUser from "../mutations/registerMutation";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  function saveData(userID, userUsername) {
    localStorage.setItem("USER_ID", userID);
    localStorage.setItem("USERNAME", userUsername);
  }
  function loginOrSignup() {
    if (login) {
      loginUser(username, password, (_id, username) => {
        saveData(_id, username);
      });
    } else {
      registerUser(username, password, (_id, username) => {
        saveData(_id, username);
      });
    }
  }
  return (
    <div className="login">
      <div className="loginInputs">
        <h1>{login ? "Login" : "Signup"}</h1>

        <p>Username</p>
        <input
          type="text"
          value={username}
          placeholder="Your Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Password</p>

        <input
          type="password"
          value={password}
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginSubmit" onClick={loginOrSignup}>
          {login ? "Login" : "Signup"}
        </button>
      </div>

      <button className="switchInfo" onClick={() => setLogin(!login)}>
        {login
          ? "Don't Have an Account? Register Here"
          : "Already have an Account? Login Here"}
      </button>
    </div>
  );
};

export default Login;
