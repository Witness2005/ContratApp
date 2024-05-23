const express = require('express')
const appusercontroller = require ('../Controllers/appusercontroller')
const router = express.Router()

router.post('/createappuser', appusercontroller.createAppUser)
router.get('/listappuserroles', appusercontroller.listAppUserRoles)

module.exports = router;