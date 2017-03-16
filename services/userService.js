const User = require('../models').User
const insertUser = (usrId, usrNm, usrPsw ,usrEml) => {
    return User.create({
        usrId : usrId,
        usrNm : usrNm,
        usrEml : usrEml,
        usrPsw : usrPsw
    })
}

const selectAllUser = () => {
    return User.findAll({
        // where: {
        //     firstName: 'nhutvo'
        // }
    })
}



module.exports = {
    insertUser,
    selectAllUser,
}