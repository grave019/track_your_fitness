const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./htmlRoutes");
//router post
router.post("/api/workouts", ({ body }, res) => {
  Workout.create({ body })
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//router delete
router.delete("/api/workouts", ({ body }, res) => {
    Workout.destroy(body)
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
//router get
  router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
          totalWeight: {
            $sum: "$exercises.weight",
          },
        },
      },
    ])
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
        console.log(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });