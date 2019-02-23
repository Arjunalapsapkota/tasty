import React, { Component } from "react";
import "./HeaderHome.css";
// import SignUpButton from "../SignupButton";
// import LoginButton from "../LoginButton";
import { Link } from "react-router-dom";

class HeaderHome extends Component {
  render() {
    return (
      <header className="header-main">
        <Link to="/">
          <h2 className="main-main-title">SIFTZ</h2>
        </Link>
        <div className="nav-right">
          <ul className="nav-items-right">
            <Link to="/mySiftz">
              <li>
                <p>My Siftz</p>
              </li>
            </Link>
            <Link to="/search">
              <li>
                <p>How you feelin'?</p>
              </li>
            </Link>
            <Link to="/signup">
              <li>
                <p>Signup</p>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <p>Login</p>
              </li>
            </Link>
          </ul>
        </div>
      </header>
    );
  }
}

export default HeaderHome;
