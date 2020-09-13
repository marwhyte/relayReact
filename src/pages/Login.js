import React, { useState } from "react";
import loginUser from "../mutations/loginMutation";
import registerUser from "../mutations/registerMutation";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const [login, setLogin] = useState(false);
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();

  function saveData(userID, userUsername) {
    localStorage.setItem("USER_ID", userID);
    localStorage.setItem("USERNAME", userUsername);
  }
  function onSubmit(values) {
    console.log(values);
    const username = values.username;
    const password = values.password;
    if (login) {
      loginUser(username, password, (_id, username) => {
        if (_id) {
          saveData(_id, username);
          history.push(`/`);
        } else {
          alert("Username or Password is Incorrect");
        }
      });
    } else {
      registerUser(username, password, (_id, username) => {
        if (_id) {
          saveData(_id, username);
          history.push(`/`);
        } else {
          alert("That User already Exists");
        }
      });
    }
  }
  return (
    <div className="login">
      <div className="wholeForm">
        <form className="loginInputs" onSubmit={handleSubmit(onSubmit)}>
          <h1>{login ? "Login" : "Signup"}</h1>

          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Your Username"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[a-z0-9_-]{4,15}$/i,
                message:
                  "Invalid Username, Must be 4-15 characters and use a-z 0-9",
              },
            })}
          />
          <label>{errors.username && errors.username.message}</label>

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Your Password"
            ref={register({
              required: "Required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/i,
                message:
                  "Invalid Password, Min 5 characters, at least 1 letter and 1 number",
              },
            })}
          />
          <label>{errors.password && errors.password.message}</label>

          <button type="submit" className="loginSubmit">
            {login ? "Login" : "Signup"}
          </button>
        </form>

        <button className="switchInfo" onClick={() => setLogin(!login)}>
          {login
            ? "Don't Have an Account? Register Here"
            : "Already have an Account? Login Here"}
        </button>
      </div>
    </div>
  );
};

export default Login;
