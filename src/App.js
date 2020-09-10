import React from "react";
import Login from "./pages/Login";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="currentPage">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
