import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateAProperty from "./pages/CreateAProperty";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const loginOrOut = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="app">
      <Header loggedIn={loggedIn} changeUser={loginOrOut} />
      <div className="currentPage">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateAProperty} />
          <Route path="/login">
            <Login loggedIn={loggedIn} changeUser={loginOrOut} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
