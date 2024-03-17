const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');
const { Category } = require('./category'); // Import the Category model

class Gig extends Model {}

Gig.init({
    gigId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    workerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    budget: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER, // Assuming category is stored as an ID referencing the Category model
        allowNull: false,
        references: {
            model: Category,
            key: 'categoryId'
        }
    }
}, {
    sequelize: connection,
    modelName: 'gig',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = { Gig };
