const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class Song extends Model { }

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        song_notes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'song'
    }
);

module.exports = { Song };

// TO-DO
// research how to save array of objects with sequelize and mysql