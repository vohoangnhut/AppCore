const _getIndexView2 = (req, res) => {
  const model = {
    user: {
      username: 'lucduong',
      email: 'luc@ltv.vn'
    },
    title: 'Login'
  }
  res.render('login', model)
}

function _returnHomePage(req,res){
    res.render('home',{title:'Home'});
}

const pagenotfound = (req, res) => {
  res.render('404',{title:'Ngu Lồn'});
}

exports.getIndexView = _getIndexView2
exports.returnHomePage = _returnHomePage
exports.pagenotfound = pagenotfound