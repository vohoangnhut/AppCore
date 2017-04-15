const Sequelize = require('sequelize')
const path = require('path')

const dotenv = require('dotenv')

//Load env file
dotenv.load({path : path.join(__dirname,'../.env')})
const db_sequelize = new Sequelize(process.env.DEV_DATABASE_URL);
console.log(process.env.JAWSDB_URL);

//CLEARDB_DATABASE_URL=mysql://bc49495ded2948:d61c3548@us-cdbr-iron-east-03.cleardb.net/heroku_635a910a6589203?reconnect=true
//DEV_DATABASE_URL=mysql://root:Teo54321@localhost:3306/db_node


const User = db_sequelize.import(path.join(__dirname,'user.js'))


const db = {}
db.User = User
db.db_sequelize = db_sequelize

module.exports = db