const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/Skill');

router.get('/skillwebs', skillsController.getAllSkillsWeb);
router.get('/skillothers', skillsController.getAllSkillsOther);

module.exports = router;