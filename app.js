const express = require('express')
const path =  require('path')

const app = express()
const port = '8080'

const router = require('./routes/routes')

app.use(express.static(path.join(__dirname,'public'),{maxAge:315360000 }))

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/',router)

//https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

app.listen(port, function(){console.log(`app is running on port ${port}`)})