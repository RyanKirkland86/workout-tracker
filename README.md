# Workout Tracker

## Project:

This is a NoSQL project using MongoDB and Mongoose that allows for a user to view, create, and track daily workouts. The user may log multiple exercises in a workout on a given day and are able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, they are able to track the distance traveled.

[Deployed Link](https://ryansworkouttracker.herokuapp.com/)

![Image](https://github.com/RyanKirkland86/workout-tracker/blob/main/public/img/FitnessTracker-DEMO.gif)

## Technologies Used:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [mongoosejs](https://mongoosejs.com/)

## Process:

Thos follwing is an example of code form the server side api-routes using a router.

```javascript
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
```
Similarly, here is an example of the server side HTML routes using a router.

```javascript
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});
```

## Authors:

- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:

This project is licensed under the MIT License.

## Acknowledgements:

Thank you to UCB Extension for the help with this project.