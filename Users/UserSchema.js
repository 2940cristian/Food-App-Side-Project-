const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
  });

  UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 15, (err, hash) => {
      if(err) {
        return next(err);
      } else {
        this.password = hash;
        return next()
      }
    })
  });


  UserSchema.methods.checkPassword = function(plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, (err, match) => {
      if(err) {
        return callback(err);
      } else {
        callback(null, match)
      }
    })
  }


  module.exports = mongoose.model('User', UserSchema);