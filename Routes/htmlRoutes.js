//require path and express allows router.get to connect to exercise.html and stats.html in public folder
const path = require("path");
const router = require("express").Router();

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;