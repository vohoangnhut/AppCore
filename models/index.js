const Sequelize = require('sequelize')
const path = require('path')
console.log(process.env.DATABASE_URL)
const db_sequelize = new Sequelize('mysql://root:Teo54321@localhost:3306/db_node');

const User = db_sequelize.import(path.join(__dirname,'user.js'))

const db = {}
db.User = User
db.db_sequelize = db_sequelize

module.exports = db