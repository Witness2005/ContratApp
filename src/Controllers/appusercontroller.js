require ('express')
const bcrypt = require('bcrypt')
const appuser = require('../Models/appuser')

async function listAppUserRoles(req, res){
    try {
        res.json(await appuser.appUserRoles().sort())
    }    catch (e){
        console.log(e);
    }
}

async function createAppUser(req, res){
    try{

        const hashPassword = await bcrypt.hash(req.body.appUserPassword, 10)

        await appuser.create({
            appUserIdentification: req.body.appUserIdentification,
            appUserIdentificationType: req.body.appUserIdentificationType,
            appUserName: req.body.appUserName,
            appUserPassword:hashPassword,
            appUserRole: req.body.appUserRole,


        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }
    catch (e){
        console.log(e);
    }
} 

module.exports={
    listAppUserRoles,
    createAppUser
}