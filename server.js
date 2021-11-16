const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT   ||  3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connecting heroku and atlas
mongoose.connect(
    process.env.MONGODB_URI ||  "mongodb://localhost/workout", 
    {
        useNewUrlParser: true,
        useFindandModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
});
// routes is being used instead of controllers
app.use(require("./routes1/apiRoutes.js"));
app.use(require("./routes1/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log('App running on port {PORT}');
});