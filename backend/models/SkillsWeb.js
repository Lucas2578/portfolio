const mongoose = require('mongoose');

const skillWebSchema = mongoose.Schema({
  name: {
    en: { type: String, required: true },
    fr: { type: String, required: true }
  },
  icon: { type: String, required: true },
  level: { type: Number, required: true },
});

module.exports = mongoose.model('skillWeb', skillWebSchema);