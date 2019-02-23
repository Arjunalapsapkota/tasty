import React, { Component, Fragment } from "react";
import HeaderHome from "../Global/HeaderHome";
import SongCard from "../SongCard";
import "../../css/main.css";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <HeaderHome />
        <div className="main-picture">
          <h3 className="marketing-blurp">
            プレミアム SIFTZ で人生をもっと快適に過ごそう。
          </h3>
        </div>
        <div className="container main-container">
          <div className="first-text-wrapper">
            {/* <h2>Songs people are sharing</h2> */}
          </div>
          <div className="row">
            {/* <SongCard />
            <SongCard />
            <SongCard />
            <SongCard /> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
