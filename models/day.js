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

const Day = mongoose.model("Day", DaySchema);

module.exports = Day;