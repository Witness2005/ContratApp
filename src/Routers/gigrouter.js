const express = require('express');
const gigController = require('../Controllers/gigcontroller');
const router = express.Router();

router.post('/createGig', gigController.createGig);
router.get('/listGigs', gigController.listGigs);
router.put('/updateGig/:gigId', gigController.updateGig);
router.delete('/deleteGig/:gigId', gigController.deleteGig);

module.exports = router;
