// const userService = require('')
//const userService = require('../services/userService')
const formidable = require('formidable');
const fs = require('fs');
const path =  require('path');

const getSys003 = (req,res) => {

            const model = {
                //users: usersLst,
                title: 'UPLOAD'
            }
        res.render('sys_003', model)
}

const postSys003 = (req,res) => {

    // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '../uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);


        //     const model = {
        //         //users: usersLst,
        //         title: 'UPLOAD'
        //     }


        // res.render('sys_003', model)
}



//exports.get_userlogin = get_userlogin
module.exports = {
    getSys003,
    postSys003
}