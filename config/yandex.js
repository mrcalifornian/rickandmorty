const fs = require('fs');
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('db1', 'candidate', process.env.PASSWORD, {
    dialect: 'postgres',
    host: process.env.URL,
    port: 6432,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
            ca: fs.readFileSync('./root.crt').toString()
        }
    },
    logging: false
});

module.exports = sequelize;