const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const passport = require("passport");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let {username, email, password} = req.body;
        const newUser = new user({email, username});
        const registereduser = await user.register(newUser, password);
        console.log(registereduser) ;
        req.flash("success","Welcome. to Wanderlust!");
        req.redirect("/listings");
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login",   passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), async (req, res) =>{
    res.flash("success","Welcome user");
    res.redirect("/listings");
});



module.exports  = router;