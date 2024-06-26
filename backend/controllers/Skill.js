const SkillWeb = require('../models/SkillsWeb');
const SkillOther = require('../models/SkillsOther');

exports.getAllSkillsWeb = (req, res, next) => {
    SkillWeb.find()
        .sort({ level: -1 })
        .then(skills => res.status(200).json(skills))
        .catch(error => res.status(404).json({ error }));
}

exports.getAllSkillsOther = (req, res, next) => {
    SkillOther.find()
        .sort({ level: -1 })
        .then(skills => res.status(200).json(skills))
        .catch(error => res.status(404).json({ error }));
}