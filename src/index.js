/* This is a Node.js server code that creates an Express application, sets up middleware to handle JSON
requests and enable CORS, defines routes for movie data using a separate module, and listens on port
3001 for incoming requests. It exports the app object for testing purposes. */
const express = require("express");
const app = express();

app.use(express.json());

const movies = require("./movies.route.js");
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use("/api", movies);
app.listen(port, () => {
  console.log("Escuchando el puerto", port);
});

module.exports = app;
