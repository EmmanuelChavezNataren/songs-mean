const express = require('express'); // Import express library to create a server instance
const cors = require('cors'); // Import cors library to enable Cross-Origin Resource Sharing

require('dotenv').config(); // Load environment variables from a .env file into process.env
require('./config/db'); // Import the database configuration file to establish a connection to the database

const app = express();

//* Config
app.use(cors()); // Enable Cross-Origin Resource Sharing for all requests by using the cors middleware
app.use(express.json()); // Parse incoming requests with JSON payloads and expose the resulting object on req.body
app.use(express.urlencoded({ extended: false })); // Parse incoming requests with urlencoded payloads and expose the resulting object on req.body

//* GET
// /api/v1/songs
// api/v1/songs/SONG_ID
app.use(`/api`, require(`./routes/api`)); // Mount the router object from the api.js file on the /api route in the server

const PORT = process.env.PORT || 3000; // Set the port to listen on from the environment variable or default to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
