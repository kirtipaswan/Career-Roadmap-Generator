const express = require('express');
const router = express.Router();
const {
  generateRoadmap,
  getRoadmaps,
  deleteRoadmap,
} = require('../controllers/roadmapController');

router.post('/roadmap/generate', generateRoadmap);
router.get('/roadmaps', getRoadmaps);
router.delete('/roadmap/:id', deleteRoadmap);

module.exports = router;