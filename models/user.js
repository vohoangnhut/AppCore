//const Sequelize = require('sequelize')
//var db = new Sequelize(process.env.DATABASE_URL);

const bcrypt = require('bcrypt')

hashPassword = (user,options) => {
    console.log(`HASH COMMING WITH PASS IS : ${user.usrPsw}`)
    
    // if(!user.changed('usrPsw'))
    // {
    //     console.log(`did not chang password`)
    //     return
    // }
    if(user.usrPsw === null || user.usrPsw === '')
        return ''
        
    return bcrypt.hash(user.usrPsw, 10).then(
        hash => user.setDataValue('usrPsw',hash),err => reject(err))
}

/**
 * db is var db = new Sequelize(process.env.DATABASE_URL);
 * DataTypes is const Sequelize = require('sequelize')
 */
module.exports = (db,DataTypes) => {

    let attribute = {
            usrNm: {
                type: DataTypes.STRING
            },
            usrPsw: {
                type: DataTypes.TEXT
            },
            usrEml: {
                type: DataTypes.STRING
            },
            localFlg : {
                type : DataTypes.STRING,
                defaultValue : 'N'
            }
    }

    const options = {
        freezeTableName: true, // Model tableName will be the same as the model name
        hooks : {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
        },
        instanceMethods: {
            validPassword : function (password, next) {
                bcrypt.compare(password, this.usrPsw, next)
            }
        }
    }


    return db.define('user',attribute,options);
}