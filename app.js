const express = require('express')
const path =  require('path')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session');
const expressValidator = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express()



app.use(express.static(path.join(__dirname,'public'),{maxAge: 0}))//315360000 }))

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportAuth')(passport); // pass passport for configuration

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  res.locals.noneNav = false;
  next();
});

//Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


//Set router
require('./routes/routes')(app,passport)

app.set('port', process.env.port || 8080)

const db = require('./models/index')
db.db_sequelize.sync({force: true})
//db.db_sequelize.sync()
    .then(()=>{
        app.listen(app.get('port'), function(){console.log(`app is running on port ${app.get('port')}`)})
})

