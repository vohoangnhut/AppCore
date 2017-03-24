// const userService = require('')
//const userService = require('../services/userService')

const getSys002 = (req,res) => {

            const model = {
                //users: usersLst,
                title: 'NOTE'
            }
        res.render('sys_002', model)
}


//exports.get_userlogin = get_userlogin
module.exports = {
    getSys002,
}