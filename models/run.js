'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RunSchema = new Schema({
    distance: {
        type: Number
    },

    duration: {
        type: String
    },

    elevation: {
        type: Number
    },

    title: {
        type: String
    },

    runType: {
        type: String
    },

    description: {
        type: String
    },

    pace: String

});

// Sets today's Day returns as a string 
RunSchema.methods.getPace = function() {
    const timeToSeconds = this.duration.split(':');
    const seconds = (+timeToSeconds[0] * 60 * 60) + (+timeToSeconds[1] * 60) + (+timeToSeconds[2]);
    const paceSeconds = seconds / this.distance;
    const paceMinutes = paceSeconds / 60;
    const remainder = paceMinutes - Math.floor(paceMinutes)
    let resultSeconds = Math.floor(remainder * 60); // takes the remainder converts to seconds 
    if (resultSeconds < 10) {
        resultSeconds = `0${resultSeconds.toString()}`; //if seconds is < 10 add a zero 
    } else {
        resultSeconds = resultSeconds.toString()
    }
    const resultMinutes = Math.floor(paceMinutes).toString(); //removes the remainder + converts to string
    return this.pace = `${resultMinutes}:${resultSeconds}` //returns a string of the time
};

// This creates our model from the above schema
const Run = mongoose.model("Run", RunSchema);

// Export the Day model
module.exports = Run;