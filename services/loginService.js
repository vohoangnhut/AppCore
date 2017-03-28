const User = require('../models').User

const selectUserByMail = (usrEml) => {
    return User.findOne({
        where : {
            usrEml : usrEml
        }
    })
}


const getUserById= (Id) => {
    return User.findById(Id)
}

module.exports = {
    selectUserByMail,
    getUserById
}