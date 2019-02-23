import React, { Component } from "react";
import "../../../css/main.css";
import { Link } from "react-router-dom";

class HeaderLogin extends Component {
  render() {
    return (
      <header className="header-index">
        <Link to="/" className="titleColorAdjust">
          <h2 className="main-title">SIFTZ</h2>
        </Link>
      </header>
    );
  }
}

export default HeaderLogin;
