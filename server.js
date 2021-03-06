'use strict';
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(require("./routes/day-routes.js"));
app.use(require("./routes/run-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});