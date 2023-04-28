/* This is a JavaScript code that defines a function called `getAllMovies` which is exported as a
module. The function uses the `axios` library to make an HTTP GET request to the OMDB API to
retrieve movie data. The function takes in three parameters from the request object: `apikey`, `s`,
and `i`. It constructs a URL based on the parameters and makes the GET request. If the request is
successful, it sends the response data back to the client. If there is an error, it sends a 500
status code and the error message. */
const axios = require("axios");
const url = `https://www.omdbapi.com/`;

const getAllMovies = async (req, res) => {
  const apikey = req.query.apikey;
  const s = req.query.s;
  const i = req.query.i;
  let apiUrl = `${url}?apikey=${apikey}`;

  if (i) {
    apiUrl += `&i=${i}`;
  } else {
    apiUrl += `&s=${s}`;
  }
  try {
    const response = await axios.get(apiUrl);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllMovies };
