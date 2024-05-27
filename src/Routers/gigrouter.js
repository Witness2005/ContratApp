const express = require('express');
const gigController = require('../Controllers/gigcontroller');
const verifyToken = require('../middlewares/auth');
const router = express.Router();

router.post('/createGig', verifyToken, gigController.createGig);
router.get('/listGigs', verifyToken, gigController.listGigs);
router.put('/updateGig/:gigId', verifyToken, gigController.updateGig);
router.delete('/deleteGig/:gigId', verifyToken, gigController.deleteGig);

module.exports = router;
