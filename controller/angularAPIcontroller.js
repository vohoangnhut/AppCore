const angularAPIServoce = require('../services/angularAPIServoce')



const getAll = (req, res) => {
    const name = req.query.name;
    if(!name)
    {
        angularAPIServoce.selectAll()
        .then((usersLst)=> {
            res.setHeader('Content-Type', 'application/json');
            var json = JSON.stringify(usersLst);
            res.end(json);
        })
    }else{
            //select peron by name
         angularAPIServoce.selectByName(name).then((usersLst)=> {
            res.setHeader('Content-Type', 'application/json');
            var json = JSON.stringify(usersLst);
            res.end(json);
        })
    }
    
}


const getById = (req, res) => {
    const id = req.params.id; 
    angularAPIServoce.selectById(id).then((user)=>{
        if(!user)
            res.end(null);
        else
            res.end(JSON.stringify(user));
    })
}


//create,update,,selectByName

const create = (req, res) => {
    const name = req.body.name;
    angularAPIServoce.create(name).then((user)=>{
        if(!user)
            res.end(null);
        else
            res.end(JSON.stringify(user));
    })
    
}

const update = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;

     angularAPIServoce.update(name,id).then((user)=>{
        if(!user)
            res.end(null);
        else
            res.end(JSON.stringify(user));
    })
}

const deleteById = (req, res) => {
    const id = req.params.id; 

     angularAPIServoce.deletePerson(id)
        .then((abc)=>{
            res.end(JSON.stringify(null));
        })
}




module.exports = {
  getAll,getById,create,update,deleteById
}