const User = require('../models').User
const insertUser = (usrNm, usrPsw ,usrEml, localFlg) => {
    return User.create({
        usrNm : usrNm,
        usrEml : usrEml,
        usrPsw : usrPsw,
        localFlg : localFlg
    })
}

const selectAllUser = () => {
    return User.findAll()
}

const deleteUserByEmail = (usrEml) => {
    return User.destroy({
                where: {
                    usrEml: usrEml
                }
            });
}

const updateUserByEmail = (usrNm,usrEml,usrPsw) => {
    return User.update({
                    usrNm: usrNm,
                    usrPsw: usrPsw
                }, {
                    where: {usrEml: usrEml},
                    individualHooks: true
                }
    );
}


module.exports = {
    insertUser,
    selectAllUser,
    deleteUserByEmail,
    updateUserByEmail
}