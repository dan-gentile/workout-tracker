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

router.put("/api/run/:id", (req, res) => {
    db.Run.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.delete("/api/run/:id", (req, res) => {
    db.Run.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;