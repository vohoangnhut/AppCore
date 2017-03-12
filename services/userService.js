const User = require('../models').User
const addUser = (usr, pwd) => {
    return User.create({
        firstName : usr,
        lastName  : pwd
    })
}

const get_UserList = () => {
    return User.findAll({
        where: {
            firstName: 'nhutvo'
        }
    })
}



module.exports = {
    addUser,
    get_UserList,
}