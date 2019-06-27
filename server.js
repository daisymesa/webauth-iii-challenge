const express = require('express');
const server = express();

const db = require('./data/users-auth');
const bcrypt = require('bcryptjs');

server.use(express.json());

//Sanity Check
server.get('/', (req, res) => {
    res.send("Server is working!");
});


module.exports = server;
