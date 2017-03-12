const express = require('express')
const path =  require('path')
const dotenv = require('dotenv')
const NODE_ENV = process.env.NODE_ENV || 'development'

var bodyParser = require('body-parser')

const app = express()
const port = '8080'

const router = require('./routes/routes')

app.use(express.static(path.join(__dirname,'public'),{maxAge:315360000 }))

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/',router)
console.log(NODE_ENV)
if(NODE_ENV === 'development'){
    dotenv.load({path : path.join(__dirname,'.env')})
}

// const Sequelize = require('sequelize')
// console.log(process.env.DATABASE_URL)
// var sequelize = new Sequelize(process.env.DATABASE_URL);
// sequelize.authenticate()
//     .then(function(){
//         console.log(`connected DB`)
//     })

//https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/


const db = require('./models/index')
db.db_sequelize.sync()
    .then(()=>{
        app.listen(port, function(){console.log(`app is running on port ${port}`)})

})

