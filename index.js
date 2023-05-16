const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/users', usersRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
