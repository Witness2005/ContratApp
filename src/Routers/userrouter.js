const express = require('express');
const userController = require('../Controllers/usercontroller');
const verifyToken = require('../middlewares/auth');
const router = express.Router();

router.post('/createUser', userController.createUser);
router.get('/listUsers', verifyToken, userController.listUsers);
router.get('/getUser/:userId', verifyToken, userController.getUser);
router.put('/updateUser/:userId', verifyToken, userController.updateUser);
router.put('/disableUser/:userId', verifyToken, userController.disableUser);
router.put('/enableUser/:userId', verifyToken, userController.enableUser);

module.exports = router;
