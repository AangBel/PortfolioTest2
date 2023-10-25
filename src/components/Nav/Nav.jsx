import React from "react";
import { Link } from "react-router-dom";
// import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  

  return (
    <div className="nav">
      <Link to="/About">
        <h2 className="nav-title">Angelica Beltran</h2>
      </Link>
      <div>
      
        <>

          <Link className="navLink" to="/About">
            About
          </Link>

          <Link className="navLink" to="/Projects">
            Projects
          </Link>

          <Link className="navLink" to="/Resume">
            Resume
          </Link>
          {/* <Link className="navLink" to="/Contact">
            Contact
          </Link> */}
        </>
      </div>
    </div>
  );
}

export default Nav;
