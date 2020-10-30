'use strict';
const router = require("express").Router();
const db = require("../models/index.js");

// get all of the runs
router.get("/api/runs", (req, res) => {
    db.Run.find({})
        .then(dbRun => {
            res.json(dbRun);
        })
        .catch(err => {
            res.json(err);
        });
});

// create a run
router.post("/submit", ({ body }, res) => {
    // Create a new user using req.body
    const newRun = new db.Run(body);
    newRun.getPace();

    db.Run.create(newRun)
        .then(({ _id }) => db.Day.findOneAndUpdate({}, { $push: { run: _id } }, { new: true }))
        .then(newRunData => {
            // If saved successfully, send the the new User document to the client
            res.json(newRunData);
        })
        .catch(err => {
            // If an error occurs, send the error to the client
            res.json(err);
        });
});

module.exports = router;