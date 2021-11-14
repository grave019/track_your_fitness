const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./htmlRoutes");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create({ body })
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});