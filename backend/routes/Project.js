const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/Project')

router.get('/project', projectsController.getAllProjects);
router.get('/project/:projectNameKey', projectsController.getOneProject);

module.exports = router;