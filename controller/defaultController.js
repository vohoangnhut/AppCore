const loginService = require('../services/loginService')

const get_login = (req, res) => {
  res.render('login', {title:'login get', noneNav : true})
}


// const post_login = (req, res) => {
  
//     const usrEml = req.body.usrEml;    
//     const usrPsw = req.body.usrPsw;
//     req.checkBody('usrEml', 'Email is required').notEmpty(); 
//     req.checkBody('usrPsw', 'Password is required').notEmpty();
    
//     var errors = req.validationErrors();
//     if (errors) {
//       res.render('login', {title:'login get', lstErrors: errors})
//     }else{
//       loginService.selectUserByMail(usrEml)
//                   .then((user,err)=>{

//                         if(err)
//                           res.end(err)
//                         if(!user)
//                           res.end(`incorrect mail`)
//                         else{
//                             console.log('comming here')
//                             user.validPassword(usrPsw, function (err, result) {
//                                 if (!result) 
//                                     res.end(`wrong pass`)
//                                 res.end(`everything all right`)
//                               });
//                         }
                          
//                   })
//     }

    
// }

function homePage(req,res){
    res.render('home',{title:'Home'});
}

const pagenotfound = (req, res) => {
  res.render('404',{title:'PAGE NODE FOUND', noneNav : true});
}

const get_logout = (req, res) => {
  	req.logout();
	  req.flash('success_msg', 'You are logged out');
	  res.redirect('/');
}

module.exports = {
  get_login,
  homePage,
  pagenotfound,
  get_logout
  //post_login
}