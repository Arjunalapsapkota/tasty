const router = require("express").Router();
const mongodb = require("mongoose");
const Songs = require("../models/song-model");

console.log("shits this page is loading");

// const authCheck = (req, res, next) => {
//   if (!req.user) {
//     //if user is not logged in
//     res.redirect("/");
//   } else {
//     next();
//   }
// };

// router.get("/", authCheck, (req, res) => {
//   console.log(req.user);
//   res.render("mySiftz", { userName: req.user.userName });
// });

router.get("/search/:time", (req, res) => {
  const timeChanger = req.params.time;
  let timeQuery = "";

  switch (timeChanger) {
    case "night":
      timeQuery = "Night(pm6~am5)";
      break;
    case "morning":
      timeQuery = "Morning(am5~am10)";
      break;
    case "day":
      timeQuery = "Day(am10~pm4)";
      break;
    case "sunset":
      timeQuery = "Sunset(pm4~pm6)";
      break;
    default:
      timeQuery = "Night(pm6~am5)";
  }

  Songs.find({ [timeQuery]: [1] }).then(songsForNight => {
    if (songsForNight) {
      console.log("songs found!!", songsForNight);
      res.send(songsForNight);
      res.end("ending session ;)");
    } else {
      console.log("songs are not found :(");
      res.send("there's no song for night");
      res.end("ending session ;)");
    }
  });
});

module.exports = router;
