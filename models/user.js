//const Sequelize = require('sequelize')
//var db = new Sequelize(process.env.DATABASE_URL);

const bcrypt = require('bcrypt')

const hashPassword = (user) => {
    console.log(`HASH COMMING WITH PASS IS : ${user.usrPsw}`)

    return bcrypt.hash(user.usrPsw, 10).then(function(hash) {
         user.setDataValue('usrPsw',hash);
    });


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
            //beforeUpdate: hashPassword,
        },
        instanceMethods: {
            validPassword : function (password, next) {
                bcrypt.compare(password, this.usrPsw, next)
            },

            generateHash : function(password, next) {
                bcrypt.hash(password, bcrypt.genSaltSync(8), next);
            }
        }
    }


    return db.define('user',attribute,options);
}