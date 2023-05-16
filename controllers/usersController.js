const User = require('../models/user');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Perform necessary validations and data processing

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(200).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

module.exports = {
  createUser
};