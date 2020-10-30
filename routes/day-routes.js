'use strict';
const router = require("express").Router();
const db = require("../models/index.js");

// get all of the days 
router.get("/api/days", (req, res) => {
    db.Day.find({})
        .then(dbRun => {
            res.json(dbRun);
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