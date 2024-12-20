const express = require("express");
const middleware = require("./middleware");
const router = require("./routes");
const { errorHandler, nonFoundHandler } = require("./error");
const myDB = require("../db/db.js");
const app = express();

app.use(express.static("public"));
app.use(express.json());

myDB.create("Jillur", 25);
myDB.create("Jillur", 25);
myDB.create("Jillur", 25);
myDB.create("Jillur", 25);
myDB.create("Jillur", 25);
myDB.bulkCreate("Muhit", 30, 5);

const winners = myDB.draw(2);
console.log("Winners", winners);

const tickets = myDB.find();
console.log("all tickets", tickets);

// router
app.use(router);

//middleware
app.use(middleware);

// handle Error

app.use(errorHandler);
app.use(nonFoundHandler);

module.exports = app;
