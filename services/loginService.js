const User = require('../models').User


const selectUserByMail = (usrEml) => {
    return User.findOne({
        where : {
            usrEml : usrEml
        }
    })
}



module.exports = {
    selectUserByMail
}