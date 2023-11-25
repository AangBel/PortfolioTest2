import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import About from "../AboutPage/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Redirect to="/About" />
          </Route>

          <Route exact path="/About">
            <About />
          </Route>

          <Route exact path="/Projects">
            <Projects />
          </Route>

          <Route exact path="/Resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
//test
export default App;
