'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RunSchema = new Schema({
    distance: {
        type: Number,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    elevation: {
        type: Number
    },

    title: {
        type: String,
        required: true
    },

    runType: {
        type: String
    },

    description: {
        type: String
    },

    time: {
        type: String
    },

    pace: String

});


RunSchema.methods.getPace = function() {
    const timeToSeconds = this.duration.split(':');
    const stringToSeconds = (+timeToSeconds[0] * 60 * 60) + (+timeToSeconds[1] * 60) + (+timeToSeconds[2]);
    const paceSeconds = stringToSeconds / this.distance;
    const paceMinutes = paceSeconds / 60;
    const remainder = paceMinutes - Math.floor(paceMinutes);
    let resultSeconds = Math.floor(remainder * 60); // takes the remainder converts to seconds 
    if (resultSeconds < 10) {
        resultSeconds = `0${resultSeconds.toString()}`; //if seconds is < 10 add a zero 
    } else {
        resultSeconds = resultSeconds.toString();
    }
    const resultMinutes = Math.floor(paceMinutes).toString(); //removes the remainder + converts to string
    return this.pace = `${resultMinutes}:${resultSeconds}`; //returns a string of the time
};

const Run = mongoose.model("Run", RunSchema);

module.exports = Run;