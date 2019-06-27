const express = require('express');

const db = require('./data/user');

const server = express();

const bcrypt = require('bcryptjs');

server.use(express.json());

server.get('/', (req, res) => {
  res.send("Server is working!");
});


module.exports = server;
