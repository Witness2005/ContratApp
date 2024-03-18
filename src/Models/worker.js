const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class Worker extends Model {}

Worker.init({
    workerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studies: {
        type: DataTypes.JSONB, 
        allowNull: true
    },
    rating: {
        type: DataTypes.FLOAT, 
        allowNull: true 
    }
}, {
    sequelize: connection,
    modelName: 'worker',
    paranoid: true,
    deleteAt: 'destroyTime'
});

module.exports = { Worker };