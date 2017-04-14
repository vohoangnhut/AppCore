// config/auth.js
const dotenv = require('dotenv')
dotenv.load({path : path.join(__dirname,'../.env')})

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '435367986812872', // your App ID
        'clientSecret'  : '9f8f6d1e4c96dd5624a5634980e77582', // your App Secret
        'callbackURL'   : process.env.FACEBOOK_CALL_BACK//'https://feckingawesome.herokuapp.com/auth/facebook/callback'
        
        //'callbackURL'   : 'http://192.168.1.9:8080/auth/facebook/callback'//'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
