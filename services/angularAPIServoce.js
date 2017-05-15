const person = require('../models').person

const selectAll = () => {
    return person.findAll()
}

const selectById = (Id) => {
    return person.findById(Id)
}

const create = (name) => {
    return person.create({
        name : name
    })
}

const update = (name,id) => {
    return person.update({
                    name: name
                }, {
                    where: {id: id}
                }
    );
}

const deletePerson = (id) => {
    return person.destroy({
                where: {
                    id: id
                }
            });
}


const selectByName = (name) => {
    return person.findAll({
        where: {
            name: {$like: '%'+name+'%'}
        }
    })
}

module.exports = {
    selectAll,
    selectById,
    create,update,deletePerson,selectByName
}