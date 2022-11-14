const mongoose = require('mongoose')

userSchema = mongoose.Schema({
  
  name:{
    type: String,
    required:[true, 'Please add a name'],
  }, 

  email:{
    type: String,
    required:[true, 'Enter email'],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid Email'
    ],
  },

  password:{
    type: String,
    required: [true, 'Please add a password'],
    minLength:[6, 'Password must be at least 6 characters'],
    maxLength:[23, 'Password cannot be more than 23 characters']
  },

  photo:{
    type: String,
    required: [true, 'Please add a photo'],
    default: "./resources/avatar.png"
  },

  bio:{
    type: String,
    default: bio,
    maxLength: [140, 'Bio cannot exceed 140 characters']
  },

  phone:{
    type: String,
    default: '+233'
  }

}, 
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema)

module.exports = User