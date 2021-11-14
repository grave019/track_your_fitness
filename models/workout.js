// require mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// documentation on mongoose schema https://mongoosejs.com/docs/guide.html
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter name of exercise",
      },
      duration: {
        type: Number,
        required: "Enter exercise duration in minutes",
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;