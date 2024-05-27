require ('express')
const bcrypt = require('bcrypt')
const appuser = require('../Models/appuser')
const jwt = require('jsonwebtoken')

//ESTO ES SOLO PARA LA PRÁCTICA DEL EJERCICIO DEL JWT - ESTO NO ES RECOMENDADO PARA NINGUN DESARROLLO
//THIS IS ONLY FOR JWT EXERCISE PRACTICE - THIS IS NOT RECOMMENDED FOR ANY DEVELOPMENT
const jwtPassword = 'qwe987gfd'

const jwt = require('jsonwebtoken')

//ESTO ES SOLO PARA LA PRÁCTICA DEL EJERCICIO DEL JWT - ESTO NO ES RECOMENDADO PARA NINGUN DESARROLLO
//THIS IS ONLY FOR JWT EXERCISE PRACTICE - THIS IS NOT RECOMMENDED FOR ANY DEVELOPMENT
const jwtPassword = 'qwe987gfd'

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

async function login (req, res){
    try{
        const userData = await user.findOne({ where: { userIdentification: req.body.userIdentification}})

        if(!userData)
            return res.status(401).json({message: "User not found"})

        const validPassword = await bcrypt.compare(req.body.userPassword, userData.userPassword)

        if(!validPassword)
            return res.status(401).json({message: "Invalid password"})

        const token = jwt.sign(
            { userId: userData.userId, userRole: userData.userRole },
            jwtPassword,
            { expiresIn: '1h'}
        )

        return res.status(200).json({ token })
    }
    catch (e){
        console.log(e)
    }
}
async function listAppUsers(req, res) {
    try {
        const users = await appuser.findAll();

        return res.status(200).json({
            data: users
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

module.exports={
    listAppUserRoles,
    createAppUser,
    login,
    listAppUsers
}