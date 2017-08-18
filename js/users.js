

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import NewUser from './components/newUser';
// var NewUser = require('./components/newUser');
// import { model } from 'mongoose';
var model = require('mongoose').models;
console.log(model);

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true}

  // admin: Boolean,
  // location: String,
  // meta: {
  //   age: Number,
  //   website: String
  // },
  // created_at: Date,
  // updated_at: Date
});


userSchema.methods.hashPassword = function() {
    // use google login or bcrypt lib ?
}


// on every save, add the date
// userSchema.pre('save', function(next) {
//   // get the current date
//   var currentDate = new Date();
  
//   // change the updated_at field to current date
//   this.updated_at = currentDate;

//   // if created_at doesn't exist, add to that field
//   if (!this.created_at)
//     this.created_at = currentDate;

//   next();
// });

// var path = require('path')
// var crypto = require('crypto')

// var mongoose = require('mongoose')

// var Schema = mongoose.Schema

// var userSchema = new Schema({
//   alias: { type: String, unique: true },
//   email: { type: String, unique: true },
//   password: String,
//   updated: { type: Date, default: Date.now }
// }, {strict: false}, { collection: 'user-info' })

// // userSchema.methods.validPassword = function (password) {
// //   const hash = crypto.createHash('sha256')
// //   hash.update(password)

// //   if (this.password === hash.digest('hex')) return true
// //   else return false
// // }

// // var User
// // if (mongoose.models.User) User = mongoose.model('User')
// // else 
// let User = mongoose.model('User', userSchema)

// module.exports = User







const User = mongoose.model('User', userSchema);

module.exports = User;