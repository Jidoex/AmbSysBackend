const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Additional fields for your user model
  // ...
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;