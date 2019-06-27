const express = require('express');

const db = require('./data');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send("Server is working!");
});


module.exports = server;
