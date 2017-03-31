/**
 * db is var db = new Sequelize(process.env.DATABASE_URL);
 * DataTypes is const Sequelize = require('sequelize')
 */
module.exports = (db,DataTypes) => {

    let attribute = {
            faceid: {
                type: DataTypes.STRING
            },
            token: {
                type: DataTypes.TEXT
            },
            email: {
                type: DataTypes.STRING
            },
            name: {
                type: DataTypes.STRING
            }
    }

    const options = {
        freezeTableName: true, // Model tableName will be the same as the model name
    }


    return db.define('userfacebook',attribute,options);
}