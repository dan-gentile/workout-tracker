'use strict';
const router = require("express").Router();
const db = require("../models/index.js");

router.post("/submit/:id", (req, res) => {

    const newRun = new db.Run(req.body);
    newRun.getPace();
    console.log(newRun)
    db.Run.create(newRun)
        .then(({ _id }) => db.Day.findOneAndUpdate({ _id: req.params.id }, { $push: { run: _id } }, { new: true }))
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