const express = require("express");
const app = express();

const mongoose = require("mongoose");

const MONGO_DB_URI = "mongodb://localhost:23100/y_mean";
mongoose.connect(MONGO_DB_URI, {
    useMongoClient: true
});

mongoose.connection.on("Connected", () => {
    console.log("App is connected to mongodb ", MONGO_DB_URI);
});

mongoose.connection.on("Error", err => {
    console.log("Error while connecting to mongoose ", err);
});

app.get("/", (req, res) => {
    return res.send("Welcome to MEAN app with Ang5");
});

const port = 3000;

app.listen(port, () => {
    console.log("Server is running in port: " + port);
});