const express = require('express');
const server = express();

const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/users-data.db3'
    },
    useNullAsDefault: true,
}

// const db = require('./data/users-auth');
const bcrypt = require('bcryptjs');

server.use(express.json());



//Sanity Check
server.get('/', (req, res) => {
    res.send("Server is working!");
});


module.exports = server;
