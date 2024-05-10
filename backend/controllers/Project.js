const Project = require('../models/Projects');

exports.getAllProjects = (req, res, next) => {
    Project.find()
        .then(projects => res.status(200).json(projects))
        .catch(error => res.status(404).json({ error }));
}