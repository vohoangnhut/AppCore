const UserFacebook = require('../models').UserFacebook
const insertUserFacebook = (id, token ,name, email) => {
    return UserFacebook.create({
        faceid : id,
        token : token,
        name : name,
        email : email
    })
}

const deleteUserFacebookById = (id) => {
    return User.destroy({
                where: {
                    faceid: id
                }
            });
}



module.exports = {
    insertUserFacebook,
    deleteUserFacebookById,
}