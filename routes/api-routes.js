const Workout = require("../models/workout")
const router = require("express").Router();
const path = require("path");

router.get("/api/workouts", (req, res) => {
    Workout.find().then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate({ _id: req.params.id },
        { $push: { exercises: req.body }}, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.json(err)
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(lastSeven => {
            res.json(lastSeven);
        }).catch(err => {
            res.json(err);
        });
});

module.exports = router;