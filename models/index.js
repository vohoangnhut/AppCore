const Sequelize = require('sequelize')
const path = require('path')
const dotenv = require('dotenv')

//Load env file
dotenv.load({path : path.join(__dirname,'../.env')})
//const db_sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
//CLEARDB_DATABASE_URL=mysql://bc49495ded2948:d61c3548@us-cdbr-iron-east-03.cleardb.net/heroku_635a910a6589203?reconnect=true
//DEV_DATABASE_URL=mysql://root:Teo54321@localhost:3306/db_node
const db_sequelize = new Sequelize('heroku_635a910a6589203', 'bc49495ded2948', 'd61c3548', {

    host: 'us-cdbr-iron-east-03.cleardb.net',
    port: 3306,
    logging: false,
    dialect: 'mysql',
    pool: {
        maxConnections: 5,
        maxIdleTime: 30
    }

});


const User = db_sequelize.import(path.join(__dirname,'user.js'))


const db = {}
db.User = User
db.db_sequelize = db_sequelize

module.exports = db