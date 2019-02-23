import React, { Component, Fragment } from "react";
import HeaderHome from "../Global/HeaderHome";
import "../../css/main.css";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: []
    };
  }

  sendInput = e => {
    let paramArray = this.state.userInput.slice();

    console.log(e.target.id);
    let songParam = e.target.id;
    paramArray.push(songParam);
    this.setState({ userInput: paramArray });
    console.log("this is state", this.state);
  };

  render() {
    return (
      <Fragment>
        <HeaderHome />
        <div className="whole-seach-component-wrap">
          <h2 className="searchTitile">今ドコにいる？</h2>
          <div className="col-8 search-click-wrapper">
            <div className="search-row">
              <button
                className="clikable-search"
                id="inside"
                onClick={this.sendInput}
              >
                インドア
              </button>
              <button
                className="clikable-search"
                id="outside"
                onClick={this.sendInput}
              >
                アウトドア
              </button>
            </div>
            <div className="search-row">
              <button
                className="clikable-search"
                id="driving"
                onClick={this.sendInput}
              >
                ドライブ
              </button>
              <button
                className="clikable-search"
                id="search-others"
                onClick={this.sendInput}
              >
                おまかせ
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Search;
