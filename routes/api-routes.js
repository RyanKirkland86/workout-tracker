const Workout = require("../models/workout")
const router = require("express").Router();
const path = require("path");


// module.exports = function(app) {

//     app.post("/api/workouts", (req, res) => {
        
//         const workout = new Workout(body);

//         Workout.create(workout)
//             .then(dbWorkout => {
//                 res.json(dbWorkout);
//             })
//             .catch(err => {
//                 res.json(err);
//             });
//     })
// }

router.get("api/workouts", (req, res) => {
    Workout.aggregate( [
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }
    ]).then((dbWorkout) => {
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

router.put("api/workouts/:id", (req, res) => {
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
    .limit(7)
        .then(lastSeven => {
            res.json(lastSeven);
        }).catch(err => {
            res.json(err);
        });
});

module.exports = router;