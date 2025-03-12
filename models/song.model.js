const { model, Schema } = require('mongoose');

const songSchema = new Schema({ // Defining the schema for the song model in the database
  songId: String,
  title: String,
  artist: String,
  genre: String,
  album: String,
  duration: Number,
  year: Number,
  trackNumber: Number,
  isExplicit: Boolean,
});

module.exports = model('song', songSchema); // Exporting the model with the schema to be used in the application
