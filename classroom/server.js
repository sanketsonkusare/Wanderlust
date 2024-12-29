const express = require("express");
const app = express();
const  cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");
    res.send("Sent you some cookies");
});

app.get("/", (req,res) => {
    console.dir(req.cookies);
    res.send("Root is running!");
});

app.listen(3000, () => {
    console.log("server is live");
});