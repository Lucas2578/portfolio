const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
  nameKey: { type: String, required: true },
  skillsRequire: [ { type: String, required: true } ],
  imagePreviewPaths: { type: String, required: true },
  imagePaths: [ { type: String } ],
  githubLink: { type: String },
});

module.exports = mongoose.model('projects', projectsSchema);