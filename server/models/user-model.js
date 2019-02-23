const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const userSchema = new Schema({
  userName: String,
  googleId: String
});

const User = mongodb.model("user", userSchema);
module.exports = User;
