'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
    date: {
        type: String,
    },

    run: [{
        type: Schema.Types.ObjectId,
        ref: "Run"
    }]


});

// This creates our model from the above schema
const Day = mongoose.model("Day", DaySchema);

// Export the Day model
module.exports = Day;