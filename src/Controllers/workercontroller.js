const express = require('express');
const { Worker } = require('../Models/worker');

async function createWorker(req, res) {
    try {
        const rating = parseFloat(req.body.rating); 
        if (rating > 5) {
            throw new Error("Rating cannot be above 5.");
        }
        const newWorker = await Worker.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            studies: req.body.studies,
            rating: req.body.rating
        });
        return res.status(200).json({ data: newWorker });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function listWorkers(req, res) {
    try {
        const workers = await Worker.findAll({
            attributes: ['workerId', 'username', 'email', 'studies','rating'], 
            order: ['username']
        });
        return res.status(200).json({ data: workers });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function updateWorker(req, res) {
    try {
        const updatedWorker = await Worker.update({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            studies: req.body.studies,
            rating: req.body.rating
        }, {
            where: { workerId: req.params.workerId }
        });
        return res.status(200).json({ data: updatedWorker });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function disableWorker(req, res) {
    try {
        const result = await Worker.destroy({
            where: { workerId: req.params.workerId }
        });
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function enableWorker(req, res) {
    try {
        const result = await Worker.restore({
            where: { workerId: req.params.workerId }
        });
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createWorker,
    listWorkers,
    updateWorker,
    disableWorker,
    enableWorker
};
