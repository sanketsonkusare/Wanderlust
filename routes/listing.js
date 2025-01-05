const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
// index route
router.get("/",wrapAsync( listingController.index));

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// show route
router.get("/:id",wrapAsync( listingController.showListing));

// Create route
router.post("/",isLoggedIn, validateListing, wrapAsync( listingController.createNewListing));

// Edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync( listingController.editListing));

// Update route
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync( listingController.updateListing ));

// Delete route
router.delete("/:id", isLoggedIn, isOwner,wrapAsync( dlistingController.eleteListing));

module.exports = router;