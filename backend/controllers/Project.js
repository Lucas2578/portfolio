const Project = require('../models/Projects');

exports.getAllProjects = (req, res, next) => {
    Project.find()
        .then(projects => res.status(200).json(projects))
        .catch(error => res.status(404).json({ error }));
}

exports.getOneProject = (req, res, next) => {
    const projectNameKey = req.params.projectNameKey;

    Project.findOne({ nameKey: projectNameKey })
        .then(project => {
            if (!project) {
                return res.status(404).json({ message: "Project not found" });
            }
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};