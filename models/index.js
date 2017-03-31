const Sequelize = require('sequelize')
const path = require('path')
const dotenv = require('dotenv')

//Load env file
dotenv.load({path : path.join(__dirname,'../.env')})

const db_sequelize = new Sequelize(process.env.DATABASE_URL);

const User = db_sequelize.import(path.join(__dirname,'user.js'))
const UserFacebook = db_sequelize.import(path.join(__dirname,'userFaceBook.js'))

const db = {}
db.User = User
db.UserFacebook = UserFacebook
db.db_sequelize = db_sequelize

module.exports = db