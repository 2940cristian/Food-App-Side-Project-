// Modules
const express = require("express");
const mongoose = require("mongoose")
const server = express();
const User = require("./Users/UserSchema")
const cors = require("cors");


//Database
mongoose.connect("mongodb://localhost/foodAppUsers")
.then(success => {
    console.log('\n=== Connected to MongoDB ===');
}).catch(err =>
    console.log('\n=== Error connecting to MongoDb, is it running? ===\n', err)
);



//Middleware
const corsOptions = {
    origin: "http://localhost:3000/",
    optionsSuccessStatus: 200
}

server.use(express.json())
server.use(cors())


//Route handers
server.get("/", (req, res) => {
    res.send("API RUNNING")
})

server.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
  
    user.save((err, user) => {
      if (err) return res.send(err);
      res.send(user)
    });
  });

  server.post("/login", (req, res) => {
      const {username, password} = req.body;

      User.findOne({username}, (err, user) => {
          if(err) {
              res.status(400).send("No user found")
              return;
          }
          if(user === null) {
              res.status(422).send("No user found")
          }

          user.checkPassword(password, (noMatch, hashMatch) => {
              if(noMatch !== null) {
                res.status(422).json({ error: 'passwords dont match' });
                return;
              }

              if(hashMatch) {
                  res.send("Logged in")
              }
          })
      })
  })

server.listen(5000, () => {console.log("Server listening on port 5000")})