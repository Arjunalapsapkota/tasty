const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const songSchema = new Schema({
  songTitle: String,
  artist: String,
  releasedYear: Number,
  country: String,
  driving: Number,
  inside: Number,
  outside: Number,
  alone: Number,
  withFriends: Number,
  withSO: Number,
  activeFeeling: Number,
  chillFeeling: Number,
  "Morning(am5~am10)": Number,
  "Day(am10~pm4)": Number,
  "Sunset(pm4~pm6)": Number,
  "Night(pm6~am5)": Number,
  alpha: String,
  url: String
});

const Songs = mongodb.model("songs", songSchema);
module.exports = Songs;
