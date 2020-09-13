import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  return (
    <div className="wholePage">
      <div className="header">
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          All Properties
        </Link>
        {props.loggedIn && (
          <Link
            activeClass="active"
            to="create"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Create Property
          </Link>
        )}
        {props.loggedIn ? (
          <div
            className="logout"
            onClick={() => {
              localStorage.removeItem("USER_ID");
              localStorage.removeItem("USERNAME");
              props.changeUser();
              history.push(`/login`);
            }}
          >
            logout
          </div>
        ) : (
          <Link
            activeClass="active"
            to="login"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
