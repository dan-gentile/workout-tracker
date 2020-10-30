'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RunSchema = new Schema({
    distance: {
        type: Number
    },

    duration: {
        type: Number
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

};

// This creates our model from the above schema
const Run = mongoose.model("Run", RunSchema);

// Export the Day model
module.exports = Run;