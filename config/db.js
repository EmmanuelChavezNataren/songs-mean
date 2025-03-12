const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI); // Connect to the MongoDB database using the MONGO_URI environment variable
