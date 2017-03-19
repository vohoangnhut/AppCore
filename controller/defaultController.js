const get_login = (req, res) => {
  res.render('login', {title:'login get'})
}


const loginService = require('../services/loginService')
const post_login = (req, res) => {
  
    const usrEml = req.body.usrEml;    
    const usrPsw = req.body.usrPsw;

    loginService.selectUserByMail(usrEml)
                  .then((user,err)=>{

                        if(!user)
                          res.end(`incorrect mail`)
                        if(err)
                          res.end(err)
                        

                          user.validPassword(usrPsw, function (err, result) {
                              if (!result) 
                                  res.end(`wrong pass`)
                              res.end(`everything all right`)
                            });
                  })
    //res.send(`usrEml : ${usrEml} , usrPsw : ${usrPsw}`)
}

function homePage(req,res){
    res.render('home',{title:'Home'});
}

const pagenotfound = (req, res) => {
  res.render('404',{title:'PAGE NODE FOUND'});
}

module.exports = {
  get_login,
  homePage,
  pagenotfound,
  post_login
}