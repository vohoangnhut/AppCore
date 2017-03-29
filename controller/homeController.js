// const get_userlogin = (req, res) => {
//   const model = {
//     user: {
//       username: 'lucduong',
//       email: 'luc@ltv.vn'
//     },
//     title: 'Login'
//   }
//   res.render('login', model)
// }


// const userService = require('../services/userService')
// const post_userlogin = (req, res) => {

//     const user = req.body.username;
//     const psw = req.body.password;
//     console.log(`user : ${user} pass : ${psw}`)
//     // console.log(`user `, user `pass : `, psw)
//     userService.addUser (user,psw)
//     .then((user)=>{
//         console.log(`add 1 user: `, user)
//     })

//     res.redirect('getUserList');


// //   const model = {
// //     user: {
// //       username: 'lucduong',
// //       email: 'luc@ltv.vn'
// //     },
// //     title: 'Login'
// //   }
// //   res.render('login', model)
// }

// const getUserList = (req,res) => {
//     userService.get_UserList()
//     .then((usersLst)=> {
//         res.render('userlist', {
//             users : usersLst
//         })

//     })
// }

// //exports.get_userlogin = get_userlogin
// module.exports = {
//     get_userlogin,
//     post_userlogin,
//     getUserList,
// }