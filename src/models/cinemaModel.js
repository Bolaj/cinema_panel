const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  screenings: {
    type: Number,
    required: true
  },
  attendees: {
    type: Number,
    required: true
  },
  revenue: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cinema', cinemaSchema);
