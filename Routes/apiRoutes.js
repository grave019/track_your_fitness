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
//router get /api/workouts  Reference to get them to connect https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/ and https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
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
  // get /api/workouts/range Referenced https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/ and https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
  router.get("/api/workouts/range", (req, res) => {
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
// documentation on using mongoDB https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/ Documentation on push aggregation https://docs.mongodb.com/manual/reference/operator/aggregation/push/
  router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    )
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;