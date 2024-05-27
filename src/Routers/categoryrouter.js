const express = require('express');
const categoryController = require('../Controllers/categorycontroller');
const verifyToken = require('../middlewares/auth');
const router = express.Router();

router.post('/createCategory', verifyToken, categoryController.createCategory);
router.get('/listCategories', verifyToken, categoryController.listCategories);
router.put('/updateCategory/:categoryId', verifyToken, categoryController.updateCategory);
router.delete('/deleteCategory/:categoryId', verifyToken, categoryController.deleteCategory);

module.exports = router;
