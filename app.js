const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../PROJECT1/models/listing.js");
const path = require("path");

main().then(() => {
    console.log("connectd to db");
}). catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("app is running");
});

// index route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My new villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample  was saved");
//     res.send("Successful testing");
// });

app.listen(8080, () => {
    console.log("server is listening");
});