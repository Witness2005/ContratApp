const express = require('express');
const categoryController = require('../Controllers/categorycontroller');
const router = express.Router();

router.post('/createCategory', categoryController.createCategory);
router.get('/listCategories', categoryController.listCategories);
router.put('/updateCategory/:categoryId', categoryController.updateCategory);
router.delete('/deleteCategory/:categoryId', categoryController.deleteCategory);

module.exports = router;
