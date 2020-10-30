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
// get one run 
router.get("/api/runs/:id", (req, res) => {
    db.Run.findById({ _id: req.params.id })
        .then(dbOneRun => {
            res.json(dbOneRun);
        })
        .catch(err => {
            res.json(err);
        });
});


// create a run
router.post("/submit", ({ body }, res) => {
    // Create a new run using req.body
    const newRun = new db.Run(body);
    // running getPace function
    newRun.getPace();
    // adding new run to db
    db.Run.create(newRun)
        .then(({ _id }) => db.Day.findOneAndUpdate({}, { $push: { run: _id } }, { new: true }))
        .then(newRunData => {

            res.json(newRunData);
        })
        .catch(err => {

            res.json(err);
        });
});

router.put("/api/run/:id", (req, res) => {
    db.Run.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
        .then(updatedRunData => {
            res.json(updatedRunData);
        })
        .catch(err => {
            res.json(err);
        })
});

router.delete("/api/run/:id", (req, res) => {
    db.Run.findByIdAndRemove({ _id: req.params.id })
        .then(deleteData => {
            res.json(deleteData)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;