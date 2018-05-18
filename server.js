// Modules
const express = require("express");
const mongoose = require("mongoose")
const server = express();


//Database


//Middleware


//Route handers
server.get("/", (req, res) => {
    res.send("API RUNNING")
})


server.listen(5000, () => {console.log("Server listening on port 5000")})