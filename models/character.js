const Sequelize = require("sequelize")
const sequelize = require('../config/yandex');

let Character = sequelize.define('mrcalifornian', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    status: Sequelize.STRING,
    species: Sequelize.STRING,
    type: Sequelize.STRING,
    gender: Sequelize.STRING,
    origin: Sequelize.JSONB,
    location: Sequelize.JSONB,
    image: Sequelize.STRING,
    episode: Sequelize.ARRAY(Sequelize.STRING),
    url: Sequelize.STRING,
    created: Sequelize.STRING,
});

module.exports = Character;

