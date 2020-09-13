import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const [userID, setUserID] = useState(localStorage.getItem("USER_ID"));
  useEffect(() => {
    function checkUserID() {
      const ourUser = localStorage.getItem("USER_ID");
      setUserID(ourUser);
      console.log("hi");
    }
    window.addEventListener("storage", checkUserID);

    return () => {
      window.removeEventListener("storage", checkUserID);
    };
  }, []);
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
        {userID && (
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
        {userID ? (
          <div
            className="logout"
            onClick={() => {
              localStorage.removeItem("USER_ID");
              localStorage.removeItem("USERNAME");
              setUserID("");
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
