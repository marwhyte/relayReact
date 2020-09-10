import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = (props) => {
  useEffect(() => {
    async function hello() {
      await localStorage.setItem("USER_ID", "Hello");
    }
    hello();
  }, []);

  const history = useHistory();

  const [userID, setUserID] = useState(localStorage.getItem("USER_ID"));

  return (
    <div className="wholePage">
      {userID ? (
        <div className="header">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Home
          </Link>
          <div
            className="logout"
            onClick={() => {
              localStorage.removeItem("USER_ID");
              setUserID("");
              history.push(`/login`);
            }}
          >
            logout
          </div>
        </div>
      ) : (
        <div className="header">
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
        </div>
      )}
    </div>
  );
};

export default Header;
