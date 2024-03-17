const express = require('express');
const { Category } = require('../Models/category');

async function createCategory(req, res) {
    try {
        const newCategory = await Category.create({
            category: req.body.category
        });
        return res.status(200).json({ data: newCategory });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function listCategories(req, res) {
    try {
        const categories = await Category.findAll({
            attributes: ['categoryId', 'category'],
            order: ['categoryId']
        });
        return res.status(200).json({ data: categories });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function updateCategory(req, res) {
    try {
        const updatedCategory = await Category.update({
            category: req.body.category
        }, {
            where: { categoryId: req.params.categoryId }
        });
        return res.status(200).json({ data: updatedCategory });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

async function deleteCategory(req, res) {
    try {
        const result = await Category.destroy({
            where: { categoryId: req.params.categoryId }
        });
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createCategory,
    listCategories,
    updateCategory,
    deleteCategory
};
