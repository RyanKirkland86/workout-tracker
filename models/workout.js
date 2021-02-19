const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ["cardio", "resistance"]
            },
            name: {
                type: String,
                trim: true,
                required: "What exercise is this?"
            },
            duration: {
                type: Number,
                min: [0, "Must be greater than 0"]
            },
            distance: {
                type: Number,
                min: [0, "Must be greater than 0"]
            },
            weight: {
                type: Number,
                min: [0, "Must be greater than 0"]
            },
            reps: {
                type: Number,
                min: [0, "Must be greater than 0"]
            },
            sets: {
                type: Number,
                min: [0, "Must be greater than 0"]
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;