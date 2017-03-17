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

const deleteUserByID = (usrId) => {
    return User.destroy({
                where: {
                    usrId: usrId
                }
            });
}

const updateUserByID = (usrId,usrNm,usrEml,usrPsw) => {
    return User.update({
                    usrNm: usrNm,
                    usrEml: usrEml,
                    usrPsw: usrPsw
                }, {
                where: {
                    usrId: usrId
                }
    });
}



module.exports = {
    insertUser,
    selectAllUser,
    deleteUserByID,
    updateUserByID
}