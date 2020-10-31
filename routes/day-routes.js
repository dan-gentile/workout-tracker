'use strict';
const router = require("express").Router();
const db = require("../models/index.js");

router.get("/api/days", (req, res) => {
    db.Day.find({})
        .then(dbRun => {
            res.json(dbRun);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/days/search/:id", (req, res) => {
    db.Day.findOne({ date: req.params.id })
        .then(dbRun => {
            res.json(dbRun);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/days/:id", (req, res) => {
    db.Day.findById({
            _id: req.params.id
        })
        .then(dbOneDay => {
            res.json(dbOneDay);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/submit/day", ({ body }, res) => {
    db.Day.create(body)
        .then(dbDay => {
            res.json(dbDay);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;