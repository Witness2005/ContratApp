const {Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class appuser extends Model {
    static appUserRoles(){
        return(["user", "worker"])
    }
}

appuser.init({
    appUserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    appUserIdentification: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    appUserIdentificationType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    appUserName: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    appUserPassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
    appUserRole: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize: connection,
    moderlName: 'appuser',
    paranoid: true,
    deteletedAt: 'destroyTime'
}
)

module.exports = appuser