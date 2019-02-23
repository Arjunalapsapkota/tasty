require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3090;

const authRoutes = require("./routers/auth-routes");
const mySiftzRoutes = require("./routers/mySiftz-routes");
const path = require("path");
const mongodb = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY]
  })
);
// Define middleware here
app.use(bodyParser.json({ type: "*/*" })); // Type indicates ALL header types OK
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

// set up routes
app.use("/api/auth", authRoutes);
app.use("/api/mySiftz", mySiftzRoutes);

try {
  mongodb.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true }, () => {
    console.log("Successfully connected mongoDB (Cloud).. 8)");
  });
} catch (error) {
  console.log(error);
}
