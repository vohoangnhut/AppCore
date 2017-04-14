const Sequelize = require('sequelize')
const path = require('path')
//const dotenv = require('dotenv')

//Load env file
//dotenv.load({path : path.join(__dirname,'../.env')})
const db_sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);

//CLEARDB_DATABASE_URL on heroku
// if(process.env.CLEARDB_DATABASE_URL)
//     {
//         console.log(process.env.CLEARDB_DATABASE_URL)
//         db_sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL)
//     }
// else
//     db_sequelize = new Sequelize(process.env.DEV_DATABASE_URL);

const User = db_sequelize.import(path.join(__dirname,'user.js'))

const db = {}
db.User = User
db.db_sequelize = db_sequelize

module.exports = db