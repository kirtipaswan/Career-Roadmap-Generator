'use client';
import { useState } from 'react';
import { generateRoadmap } from '../lib/api';

export default function RoadmapForm({ onRoadmapGenerated }) {
  const [formData, setFormData] = useState({
    targetRole: '',
    currentSkills: '',
    experienceLevel: 'beginner',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await generateRoadmap(formData);
      if (data.message) {
        setError(data.message);
      } else {
        onRoadmapGenerated(data);
        setFormData({ targetRole: '', currentSkills: '', experienceLevel: 'beginner' });
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🗺️ Generate Your Career Roadmap
      </h2>
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Role
          </label>
          <input
            type="text"
            name="targetRole"
            value={formData.targetRole}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer, Data Scientist"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Skills
          </label>
          <input
            type="text"
            name="currentSkills"
            value={formData.currentSkills}
            onChange={handleChange}
            placeholder="e.g. HTML, CSS, JavaScript"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Experience Level
          </label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Generating...' : '🚀 Generate Roadmap'}
        </button>
      </form>
    </div>
  );
}