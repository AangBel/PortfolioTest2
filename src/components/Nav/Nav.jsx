import React from "react";
import { Link } from "react-router-dom";
// import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Angelica Beltran</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}

        {/* If a user is logged in, show these links */}
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
          <Link className="navLink" to="/Contact">
            Contact
          </Link>
        </>
      </div>
    </div>
  );
}

export default Nav;

// <div className="App">
// <Nav />
// <Link
//   to="/About"
//   className={
//     location.pathname === "/About" ? "navLink active" : "navLink"
//   }
// >
//   About
//   <About/>
// </Link>

// <Link
//   to="/Projects"
//   className={
//     location.pathname === "/Projects" ? "navLink active" : "navLink"
//   }
// >
//  Projects
// </Link>

// <Link
//   to="/Resume"
//   className={
//     location.pathname === "/Resume" ? "navLink active" : "navLink"
//   }
// >
//   Resume
// </Link>

// <Link
//   to="/Contact"
//   className={
//     location.pathname === "/Contact" ? "navLink active" : "navLink"
//   }
// >
//   Contact
// </Link>
// <Footer/>
