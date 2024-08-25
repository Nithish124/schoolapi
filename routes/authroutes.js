const express = require('express');
const authcontrol = require('../controller/authcontroller')
const router = express.Router();
router.post('/addSchool', authcontrol.addSchoolController);
router.get('/listSchools', authcontrol.listSchoolsController);
module.exports = router;