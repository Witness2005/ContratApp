const express = require('express');
const { Gig } = require('../Models/gig');
const { Category } = require('../Models/category'); // Import the Category model
const { Worker } = require('../Models/worker');
const { User } = require('../Models/user');


async function createGig(req, res) {
    try {
        // Check if workerId exists
        const existingWorker = await Worker.findOne({ where: { workerId: req.body.workerId } });
        if (!existingWorker) {
            throw new Error('Worker with provided ID does not exist');
        }

        // Check if userId exists
        const existingUser = await User.findOne({ where: { userId: req.body.userId } });
        if (!existingUser) {
            throw new Error('User with provided ID does not exist');
        }

        // Check if categoryId exists
        const existingCategory = await Category.findOne({ where: { categoryId: req.body.categoryId } });
        if (!existingCategory) {
            throw new Error('Category with provided ID does not exist');
        }

        const newGig = await Gig.create({
            workerId: req.body.workerId,
            userId: req.body.userId,
            categoryId: req.body.categoryId,
            description: req.body.description,
            budget: req.body.budget,
            deadline: req.body.deadline,
            completed: req.body.completed
        });

        return res.status(200).json({ data: newGig });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function updateGig(req, res) {
    try {
        // Check if workerId exists
        const existingWorker = await Worker.findOne({ where: { workerId: req.body.workerId } });
        if (!existingWorker) {
            throw new Error('Worker with provided ID does not exist');
        }

        // Check if userId exists
        const existingUser = await User.findOne({ where: { userId: req.body.userId } });
        if (!existingUser) {
            throw new Error('User with provided ID does not exist');
        }

        // Check if categoryId exists
        const existingCategory = await Category.findOne({ where: { categoryId: req.body.categoryId } });
        if (!existingCategory) {
            throw new Error('Category with provided ID does not exist');
        }

        const updatedGig = await Gig.update({
            workerId: req.body.workerId,
            userId: req.body.userId,
            categoryId: req.body.categoryId,
            description: req.body.description,
            budget: req.body.budget,
            deadline: req.body.deadline,
            completed: req.body.completed
        }, {
            where: { gigId: req.params.gigId }
        });

        return res.status(200).json({ data: updatedGig });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}


async function listGigs(req, res) {
    try {
        // Retrieve gigs
        const gigs = await Gig.findAll({
            attributes: ['gigId', 'workerId', 'userId', 'categoryId', 'description', 'budget', 'deadline', 'completed'],
            order: ['gigId']
        });

        // Retrieve categories
        const categories = await Category.findAll({
            attributes: ['categoryId', 'category']
        });

        // Combine gigs and categories data
        const gigsWithCategories = gigs.map(gig => {
            const category = categories.find(cat => cat.id === gig.category);
            return {
                id: gig.gigId,
                workerId: gig.workerId,
                userId: gig.userId,
                category: category ? category.category : null,
                description: gig.description,
                budget: gig.budget,
                deadline: gig.deadline,
                completed: gig.completed
            };
        });

        return res.status(200).json({ data: gigsWithCategories });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}


async function deleteGig(req, res) {
    try {
        const result = await Gig.destroy({
            where: { gigId: req.params.gigId }
        });
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createGig,
    listGigs,
    updateGig,
    deleteGig
};
