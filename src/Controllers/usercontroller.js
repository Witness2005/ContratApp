const express = require('express');
const { User } = require('../Models/user');


async function createUser(req, res) {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phonenumber: req.body.phonenumber,
          
        });
        return res.status(200).json({ data: newUser });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function listUsers(req, res) {
    try {
        const users = await User.findAll({
            attributes: ['userId', 'username', 'email','phonenumber'],
            order: ['username']
        });
        return res.status(200).json({ data: users });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function updateUser(req, res) {
    try {
        const updatedUser = await User.update({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }, {
            where: { userId: req.params.userId }
        });
        return res.status(200).json({ data: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}
async function getUser(req, res){
    try{
        await User.findOne({
            where: {userId : req.params.userId},
            attributes: [
                'userId',
                'username',
                'email',
                'password',
                'phonenumber'
            ],
            //Falta traer el departmentId
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
    catch(e){
        console.log(e);
    }
}

async function disableUser(req, res) {
    try {
        const result = await User.destroy({
            where: { userId: req.params.userId }
        });
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function enableUser(req, res) {
    try {
        const result = await User.restore({
            where: { userId: req.params.userId }
        });
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createUser,
    listUsers,
    updateUser,
    disableUser,
    enableUser,
    getUser
};
