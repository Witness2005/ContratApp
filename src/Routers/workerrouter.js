const express = require('express');
const workerController = require('../Controllers/workercontroller');
const router = express.Router();

router.post('/createWorker', workerController.createWorker);
router.get('/listWorkers', workerController.listWorkers);
router.put('/updateWorker/:workerId', workerController.updateWorker);
router.put('/disableWorker/:workerId', workerController.disableWorker);
router.put('/enableWorker/:workerId', workerController.enableWorker);

module.exports = router;