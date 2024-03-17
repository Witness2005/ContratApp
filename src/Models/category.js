const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class Category extends Model {}

Category.init({
    categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'category',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = { Category } ;
