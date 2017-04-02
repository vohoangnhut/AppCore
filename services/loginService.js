const User = require('../models').User
const UserFacebook = require('../models').UserFacebook

const selectUserByMail = (usrEml, isLocalUser) => {
    return User.findOne({
        where : {
            usrEml : usrEml,
            localFlg : isLocalUser
        }
    })
}


const getUserById= (Id) => {
    return User.findById(Id)
}

const selectUserFacebookById = (Id) => {
    return UserFacebook.findOne({
        where : {
            faceid : Id
        }
    })
}


module.exports = {
    selectUserByMail,
    getUserById,
    selectUserFacebookById
}