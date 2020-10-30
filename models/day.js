'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
    date: String, //created by the method below the schema

    run: [{
        type: Schema.Types.ObjectId,
        ref: "Run"
    }]


});

// Sets today's Day returns as a string 
DaySchema.methods.getDate = function() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    this.date = today.toDateString();
    return this.date;
};

// This creates our model from the above schema
const Day = mongoose.model("Day", DaySchema);

// Export the Day model
module.exports = Day;