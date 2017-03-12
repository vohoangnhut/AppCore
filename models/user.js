//const Sequelize = require('sequelize')
//var db = new Sequelize(process.env.DATABASE_URL);


// var User = db.define('user', {
//   firstName: {
//     type: Sequelize.STRING,
//     field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// }, {
//   freezeTableName: true // Model tableName will be the same as the model name
// });

// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

// module.exports = User

/**
 * db is var db = new Sequelize(process.env.DATABASE_URL);
 * DataTypes is const Sequelize = require('sequelize')
 */
module.exports = (db,DataTypes) => {

        var User = db.define('user', {
        firstName: {
            type: DataTypes.STRING,
            field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        lastName: {
            type: DataTypes.STRING
        }
        }, {
        freezeTableName: true // Model tableName will be the same as the model name
        });

        return User;
}