
/**
 * db is var db = new Sequelize(process.env.DATABASE_URL);
 * DataTypes is const Sequelize = require('sequelize')
 */
module.exports = (db,DataTypes) => {

    let attribute = {
            name: {
                type: DataTypes.TEXT
            }

    }

    const options = {
        freezeTableName: true,
    }


    return db.define('person',attribute,options);
}