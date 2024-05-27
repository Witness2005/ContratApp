const express = require('express');
const workerController = require('../Controllers/workercontroller');
const verifyToken = require('../middlewares/auth')
const router = express.Router();

router.post('/createWorker', verifyToken, workerController.createWorker);

router.get('/listWorkers',verifyToken, workerController.listWorkers);
router.get('/getWorker/:workerId',verifyToken, workerController.getWorker);

router.put('/updateWorker/:workerId',verifyToken, workerController.updateWorker);
router.put('/disableWorker/:workerId',verifyToken, workerController.disableWorker);
router.put('/enableWorker/:workerId',verifyToken, workerController.enableWorker);

module.exports = router;