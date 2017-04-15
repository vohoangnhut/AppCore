// const userService = require('')
const userService = require('../services/userService')

const get_sys_001 = (req,res) => {
  //res.render('sys_001', {title: 'USER'})

  userService.selectAllUser()
    .then((usersLst)=> {
        console.log(`render user mgmt - get`)
          const model = {
                users: usersLst,
                //lstErrors : {msg:'asdsd'},
                title: 'USER1'
            }

        res.render('sys_001', model)

    })

}

//Save
const post_sys_001 = (req,res) => {

    const txtUsrNm = req.body.txtUsrNm;
    const txtEmail = req.body.txtEmail;
    const txtPsw = req.body.txtPsw;


    userService.insertUser(txtUsrNm,txtPsw, txtEmail.toLowerCase(),'Y')
            .then((user)=>{
                const newRow1 = `<tr id="local${user.dataValues.usrEml}">
                                    <td class="tbl-content-col count"> </td>
                                    <td class="tbl-content-col">${user.dataValues.usrNm}</td>
                                    <td class="tbl-content-col">${user.dataValues.usrEml}</td>
                                    <td class="tbl-content-col">${user.dataValues.localFlg}</td>
                                    <td att-name="${user.dataValues.usrNm}" 
                                        att-email="${user.dataValues.usrEml}" >
                                        <button class="btn btn-primary" type="button" onclick="btnEdit(this)"><i class="fa fa-pencil"></i></button>
                                        <button class="btn btn-danger" type="button" onclick="btnDelete(this)" style="margin-left: 3px;"><i class="fa fa-times"></i></button>
                                    </td>
                                </tr>`
                const responseObj = {
                    msg : 'Inserted Successfully',
                    status  : '200',
                    newRow : newRow1
                }
                res.end(JSON.stringify(responseObj))
            })

    
}

//Update
const put_sys_001 = (req,res) => {

    const usrNm = req.body.txtUsrNm;   
    const usrEml = req.body.txtEmail;    
    const usrPsw = req.body.txtPsw;    

    userService.findUserByMail(usrEml.toLowerCase())
        .then((user)=>{
            if(!user)
                res.end('Mail dont exist');
            else
                {
                    user.generateHash(usrPsw, function (err, result) {
                            if(err) throw err;
                            if (!result) 
                                res.end('internal server error')
                            else
                            {
                                userService.updateUserByEmail(usrNm,usrEml,result)
                                    .then((abc)=>{
                                        console.log(`update --- ${abc}`)
                                        
                                        const responseObj = {
                                            msg : 'Updated Successfully',
                                            status  : '200',
                                            localElement : usrEml
                                        }

                                        res.end(JSON.stringify(responseObj));
                                })
                            }
                                
                    });

                }
        })
     
 
}

const delete_sys_001 = (req,res) => {
    console.log(`comming to delete`)
    const usrEml = req.body.usrEml;    
    userService.deleteUserByEmail(usrEml)
        .then((abc)=>{
            console.log(`deleted --- ${abc}`)
        
            const responseObj = {
                msg : 'Deleted Successfully',
                status  : '200',
                localElement : usrEml
            }

            res.end(JSON.stringify(responseObj));
        })
}



//exports.get_userlogin = get_userlogin
module.exports = {
    get_sys_001,
    post_sys_001,
    put_sys_001,
    delete_sys_001
}