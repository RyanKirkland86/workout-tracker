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
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }
    ]
}, {
    toObject: {
    virtuals: true
    },
    toJSON: {
    virtuals: true 
    }
  });



workoutSchema
.virtual('totalDuration')
.get(function () {
    let sum = 0;
  this.exercises.forEach(workout => {
      sum += workout.duration;
  })
  return sum;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;