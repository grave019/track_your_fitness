// require express apiRoutes and htmlRoutes
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");
//use apiRoutes and htmlRoutes
router.use("/apiRoutes", apiRoutes);
router.use("/htmlRoutes", htmlRoutes);

module.exports = router;