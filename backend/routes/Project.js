const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/Project')

router.get('/project', projectsController.getAllProjects);

module.exports = router;