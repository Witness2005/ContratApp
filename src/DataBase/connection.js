const { Sequelize } = require('sequelize');

var dataBase = 'contratAppDB';
var userName = 'postgres';
var password = '****';

const connection = new Sequelize(dataBase, userName, password,{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;