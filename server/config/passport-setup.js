const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const InstagramStrategy = require("passport-Instagram");
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/user-model.js");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //option for strategy

      callbackURL: "http://localhost:3090/api/auth/google/redirect", //this is for local
      clientID: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
      // callbackURL: "https://shiftz-jp.herokuapp.com/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      //   console.log("callback is fired");
      //   console.log("where is ID?", profile);
      //check if user is already in our database

      User.findOne({ googleId: profile.id }).then(userExsist => {
        if (userExsist) {
          console.log("user found", userExsist);
          done(null, userExsist);
        } else {
          new User({
            userName: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new user created", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
passport.use(
  new InstagramStrategy(
    {
      //option for strategy

      callbackURL: "http://localhost:3090/api/auth/instagram/redirect", //this is for local
      clientID: process.env.INSTAGRAM_CLIENT,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
      // callbackURL: "https://shiftz-jp.herokuapp.com/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      //   console.log("callback is fired");
      //   console.log("where is ID?", profile);
      //check if user is already in our database

      User.findOne({ googleId: profile.id }).then(userExsist => {
        if (userExsist) {
          console.log("user found", userExsist);
          done(null, userExsist);
        } else {
          new User({
            userName: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new user created", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      //option for strategy

      callbackURL: "http://localhost:3090/api/auth/facebook/redirect", //this is for local
      clientID: process.env.APP_ID,
      clientSecret: process.env.APP_SECRET
      // callbackURL: "https://shiftz-jp.herokuapp.com/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      //   console.log("callback is fired");
      //   console.log("where is ID?", profile);
      //check if user is already in our database

      User.findOne({ googleId: profile.id }).then(userExsist => {
        if (userExsist) {
          console.log("user found", userExsist);
          done(null, userExsist);
        } else {
          new User({
            userName: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new user created", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
