// const userService = require('')
const userService = require('../services/userService')

const get_sys_001 = (req,res) => {
  res.render('sys_001', {title: 'USER'})

  userService.selectAllUser()
    .then((usersLst)=> {
        res.render('sys_001', {
            users : usersLst
        })
    })

}

const post_sys_001 = (req,res) => {

    //txtUsrNm,txtEmail,txtPsw,txtUsrId
    const txtUsrId = req.body.txtUsrId;    
    const txtUsrNm = req.body.txtUsrNm;
    const txtEmail = req.body.txtEmail;
    const txtPsw = req.body.txtPsw;

    userService.insertUser(txtUsrId,txtUsrNm,txtPsw, txtEmail)
                .then((user)=>{
                    console.log(`add 1 user: `, user)
                    
                })
    

  //res.render('sys_001', {title: 'USER'})
}

const put_sys_001 = (req,res) => {
  res.render('sys_001', {title: 'USER'})
}

const delete_sys_001 = (req,res) => {
  res.render('sys_001', {title: 'USER'})
}



//exports.get_userlogin = get_userlogin
module.exports = {
    get_sys_001,
    post_sys_001,
    put_sys_001,
    delete_sys_001
}