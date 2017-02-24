function _getIndexView(req,res){
    const model = {
        user: {
            username : 'nhutvo',
            email : 'nhutvo@vhn.vn'
        },
        title: 'HomePage'
    }

    res.render('home',model)
}

const _getIndexView2 = (req, res) => {
  const model = {
    user: {
      username: 'lucduong',
      email: 'luc@ltv.vn'
    },
    title: 'HomePage'
  }
  res.render('home', model)
}

function _returnHomePage(req,res){
    res.send(`fuck off here`)
}

exports.getIndexView = _getIndexView
exports.returnHomePage = _returnHomePage