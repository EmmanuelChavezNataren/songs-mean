const router = require('express').Router(); // Import the Router class from the express library to create a new router object

const Song = require('../../models/song.model'); // Import the Song model to interact with the songs collection in the database

router.get('/', async (req, res) => {
    try {
        const songs = await Song.find(); // Retrieve all songs from the database
        res.json(songs); // Send the retrieved songs as a JSON response
    } catch (error) {
        res.json({ error: error.message }); // Send the error message as a JSON response if an error occurs
    }
});

router.get('/:songId', async (req, res) => {
try {
    const { songId } = req.params; // Extract the songId parameter from the request URL
    const song = await Song.findById(songId); // Retrieve the song with the specified ID from the database
    if (!song) {
        return res.status(404).json({ error: 'Song not found' }); // Send a 404 error if the song is not found
    }
    res.json(song); // Send the retrieved song as a JSON response
} catch (error) {
    res.json({ error: error.message }); // Send the error message as a JSON response if an error occurs
}
});

module.exports = router; // Export the router object to be used in other files
