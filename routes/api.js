const router = require('express').Router(); // Import the Router class from the express library to create a new router object

router.use(`/songs`, require(`./api/songs`)); // Mount the router object from the songs.js file on the /songs route in the server

module.exports = router; // Export the router object to be used in other files
