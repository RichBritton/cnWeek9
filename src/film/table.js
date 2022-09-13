
const { DataTypes } = require("sequelize")
const { sequelize } = require('../db/connection') 

const Film = sequelize.define("Film", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
});

module.exports = Film;