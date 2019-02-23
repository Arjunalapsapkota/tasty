import React, { Fragment } from "react";
import HeaderHome from "../Global/HeaderHome";
import SongCard from "../SongCard";
// import axios from "axios";

class MySiftz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "this is stuff"
    };
  }

  createSongCard = data => {
    let songCards = [];
    for (let i = 0; i < 12; i++) {
      songCards.push(<SongCard songInfo={data[i]} key={data[i]._id} />);
      console.log("this is what you're passing to the component", data[i]);
    }
    return songCards;
  };

  componentDidMount() {
    this._fetchSongReqeust = fetch("/api/mySiftz/search/night", {
      headers: { crossDomain: true }
    })
      .then(result => {
        console.log("this is result", result);
        return result.json();
      })
      .then(songData => {
        console.log(songData);
        this.setState({ data: songData });
        console.log(
          "lets see what is the state data index 0",
          this.state.data[0]
        );
        this._fetchSongReqeust = null;
      });

    // trimmingUrl(this.songData.url).then(url => {
    //   this.setState({});
    // });
    console.log("lets see what is the state", this.state.data);
  }

  trimmingUrl(originalUrl) {
    let realUrl = "";
    let index = originalUrl.IndexOf("=");
    if (index > 0) originalUrl = originalUrl.Substring(0, index);
    realUrl = "https://img.youtube.com/vi/" + originalUrl + "/0.jpg";
    return realUrl;
  }

  // setQuery = result => {
  //   this.setState({ query: result });
  // };

  // ###############################################MAPPING FUNCTION
  //         var names = ['Jake', 'Jon', 'Thruster'];
  //         var namesList = names.map(function(name){
  //                         return <li>{name}</li>;
  //                       })

  //         return  <ul>{ namesList }</ul>
  //     }

  render() {
    return (
      <div className="main-page">
        <HeaderHome />
        <div className="main-picture-for-my-shiftz">
          <h3 className="marketing-blurp-for-myshiftz">SIFTZ</h3>
          {/* #{userName}'s SHIFTZ */}
        </div>
        {/* Photo by Vincent Gerbouin from Pexels  */}
        <div className="body-background1">
          <div className="container main-container">
            <div className="first-text-wrapper2">
              <h2>今の時間帯にぴったりの曲。</h2>
            </div>
            <div className="row">
              {/* <div className="col-3"> */}
              {this.createSongCard(this.state.data)}
              {}
              {/* <SongCard songInfo={this.state.data} /> */}
              {/* <SongCard songInfo={this.state.data} /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MySiftz;
