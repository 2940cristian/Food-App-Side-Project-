// Modules
const express = require("express");
const mongoose = require("mongoose")
const server = express();
const User = require("./Users/UserSchema")


//Database
mongoose.connect("mongodb://localhost/foodAppUsers")
.then(success => {
    console.log('\n=== Connected to MongoDB ===');
}).catch(err =>
    console.log('\n=== Error connecting to MongoDb, is it running? ===\n', err)
);



//Middleware

server.use(express.json())


//Route handers
server.get("/", (req, res) => {
    res.send("API RUNNING")
})

// server.post('/register', (req, res) => {
//     // const { username, password } = req.body;
//     res.send(req.body)
//     // const user = new User({username, password});

//     // user.save((err, user) => {
//     //     if(err) return res.send(err);
//     //     res.send("User has been created")
//     // })
// })

server.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
  
    user.save((err, user) => {
      if (err) return res.send(err);
      res.send("Success")
    });
  });

server.listen(5000, () => {console.log("Server listening on port 5000")})