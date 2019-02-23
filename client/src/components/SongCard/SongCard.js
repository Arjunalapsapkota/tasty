import React from "react";
import "../../css/main.css";
// import { Helmet } from "react-helmet";

var urlToImage = function(videoUrl) {
  if (videoUrl) {
    console.log("vidoe url", videoUrl);
    let realUrl = "";
    const criticalIndex = videoUrl.indexOf("=");
    if (criticalIndex > 0)
      videoUrl = videoUrl.substring(criticalIndex + 1, videoUrl.length);
    realUrl = "https://img.youtube.com/vi/" + videoUrl + "/0.jpg";
    return realUrl;
  } else {
    console.log("not rendered yet");
  }
};

const SongCard = props => (
  <div className="col-3">
    <div className="card card2">
      {/* <div id="player"></div> */}

      {/* <Helmet>
    <script>
 
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      </script>
      </Helmet> */}

      {/* https://img.youtube.com/vi/DTdih_-Rv9E/0.jpg

https://www.youtube.com/watch?v=DTdih_-Rv9E

<Helmet>
  <script>let videoUrl = props.songInfo.url
  int index = videoUrl.IndexOf("=");
if (index > 0)
videoUrl = videoUrl.Substring(0, index);
realUlr = "https://img.youtube.com/vi/"+videoUrl+"/0.jpg"
  </script>
</Helmet> */}

      <img
        className="card-img-top"
        src={urlToImage(props.songInfo.url)}
        alt="song img"
      />

      <div className="card-body card-body2">
        <div className="avator">
          <img
            src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png"
            alt="avator man"
          />
        </div>
        <p className="song-title">{props.songInfo.songTitle}</p>

        <div className="star-and-share">
          <i className="far fa-heart" />
          <i className="fas fa-share-square" />
        </div>
      </div>
    </div>
  </div>
);

export default SongCard;
