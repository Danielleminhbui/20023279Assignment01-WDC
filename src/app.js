// ## app.js ##
//
// This is where we set up our web application using Express. We create the
// app and set up routes which will respond to requests from the client's
// web browser.

const path = require("path");
const express = require("express");

// Create a new Express app
const app = express();

// Serve up our static assets from 'dist' (this includes our client-side
// bundle of JavaScript). These assets are referred to in the HTML using
// <link> and <script> tags.
app.use("/assets", express.static(path.resolve(__dirname, "..", "dist")));

//public folder
app.use("/public", express.static(path.resolve(__dirname, "..", "public")));

app.get("/", function (req, res) {
  res.redirect("/public");
});

// Export the Express app
module.exports = app;
