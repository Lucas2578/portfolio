const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
  nameKey: { type: String, required: true },
  skillsRequire: [ { type: String, required: true } ],
  imagePreviewPaths: { type: String, required: true },
  imagePaths: {
    screen1: { type: String, required: true },
    screen2: { type: String, required: true },
    screen3: { type: String, required: true },
  },
  githubLink: { type: String },
});

module.exports = mongoose.model('projects', projectsSchema);