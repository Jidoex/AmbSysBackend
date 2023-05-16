const express = require('express');
const app = express();

app.post('/users', (req, res) => {
    const{username, email, password} = req.body;
    res.status(200).json({message: "User created successfully"});
});