const express = require('express');
const server = express();

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const userData = require('./users-model');

const bcrypt = require('bcryptjs');

server.use(express.json());

//Sanity Check
server.get('/', (req, res) => {
    res.send("Server is working!");
});


module.exports = server;
