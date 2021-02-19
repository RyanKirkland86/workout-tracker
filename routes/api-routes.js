// const db = require("../models");
const Workout = require("../models/workout.js")


module.exports = function(app) {

    app.get("/api/workouts", ({ body }, res) => {

    });

    app.post("/api/workouts", ({ body }, res) => {
        
        const workout = new Workout(body);

        Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })
}