const mongoose = require('mongoose');

const skillWebSchema = mongoose.Schema({
  nameKey: { type: String, required: true },
  icon: { type: String, required: true },
  level: { type: Number, required: true },
});

module.exports = mongoose.model('skillWeb', skillWebSchema);