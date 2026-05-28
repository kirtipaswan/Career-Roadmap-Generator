const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema(
  {
    targetRole: {
      type: String,
      required: true,
    },
    currentSkills: {
      type: String,
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'experienced'],
      required: true,
    },
    roadmap: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Roadmap', roadmapSchema);