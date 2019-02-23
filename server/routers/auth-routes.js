const router = require("express").Router();
const passport = require("passport");

// auth login
// router.get("/login", (req, res) => {
//   res.render("login", { user: req.user });
// });

router.get("/login", (req, res) => {
  res.render("newLogin", { user: req.user });
});

router.get("/signup", (req, res) => {
  res.render("signUp");
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"] //add whatever you want from user
  })
);
router.get("/instagram", passport.authenticate("instagram"));
router.get("/facebook", passport.authenticate("facebook"));
//auth callback from google
router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (err, req, res, next) => {
    if (err.name === "TokenError") {
      res.redirect("http://localhost:3000/login"); // for local
    } else {
      // Handle other errors here
    }
  },
  (req, res) => {
    res.redirect("http://localhost:3000/mySiftz/");
    //res.send(req.user);
  }
);
router.get(
  "/instagram/redirect",
  passport.authenticate("instagram", { failureRedirect: "/login" }),
  (err, req, res, next) => {
    if (err.name === "TokenError") {
      res.redirect("http://localhost:3000/login"); // for local
    } else {
      // Handle other errors here
    }
  },
  (req, res) => {
    res.redirect("http://localhost:3000/mySiftz/");
    //res.send(req.user);
  }
);

router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (err, req, res, next) => {
    if (err.name === "TokenError") {
      res.redirect("http://localhost:3000/login"); // for local
    } else {
      // Handle other errors here
    }
  },
  (req, res) => {
    res.redirect("http://localhost:3000/mySiftz/");
    //res.send(req.user);
  }
);

module.exports = router;
