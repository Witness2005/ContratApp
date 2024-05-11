const express = require('express');
const userController = require('../Controllers/usercontroller');
const router = express.Router();

router.post('/createUser', userController.createUser);


router.get('/listUsers', userController.listUsers);
router.get('/getUser/:userId', userController.getUser);


router.put('/updateUser/:userId', userController.updateUser);
router.put('/disableUser/:userId', userController.disableUser);
router.put('/enableUser/:userId', userController.enableUser);

module.exports = router;
