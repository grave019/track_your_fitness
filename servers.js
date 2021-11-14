const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const controllers = require("./controllers");

const PORT = process.env.PORT   ||  3000;

const app = express();

app.use(logger("dev"));

