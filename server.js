'use strict';
// Required Dependencies 
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

// Server 
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connect to database 
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);
// Imported Routes 
app.use(require("./routes/day-routes.js"));
app.use(require("./routes/run-routes.js"));

// Start the Server 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});