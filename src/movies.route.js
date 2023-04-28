/* This code is creating a router object using the Express framework in Node.js. It then defines a GET
route for "/movies" and maps it to the getAllMovies function in the movies.js module. Finally, it
exports the router object so that it can be used in other parts of the application. */
const express = require("express");
const router = express.Router();
const movies = require("./movies.js");
router.get("/movies", movies.getAllMovies);

module.exports = router;
