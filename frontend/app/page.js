'use client';
import { useState, useEffect } from 'react';
import RoadmapForm from '../components/RoadmapForm';
import HistoryList from '../components/HistoryList';
import { getRoadmaps } from '../lib/api';
import Link from 'next/link';

export default function Home() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [latestRoadmap, setLatestRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  const fetchRoadmaps = async () => {
    try {
      const data = await getRoadmaps();
      setRoadmaps(data);
    } catch (err) {
      console.error('Error fetching roadmaps:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRoadmapGenerated = (newRoadmap) => {
    setRoadmaps([newRoadmap, ...roadmaps]);
    setLatestRoadmap(newRoadmap);
  };

  const handleDelete = (id) => {
    setRoadmaps(roadmaps.filter((r) => r._id !== id));
    if (latestRoadmap && latestRoadmap._id === id) {
      setLatestRoadmap(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <h1 className="text-xl font-bold text-blue-700">Margdarshak AI</h1>
        </div>
        <Link
          href="/history"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          📋 View History
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
            Your Personal Career Roadmap Generator
          </h2>
          <p className="text-gray-500 text-lg">
            Enter your target role and current skills to get a personalized
            step-by-step career roadmap powered by AI.
          </p>
        </div>

        <RoadmapForm onRoadmapGenerated={handleRoadmapGenerated} />

        {latestRoadmap && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              ✅ Your Generated Roadmap:
            </h3>
            <HistoryList
              roadmaps={[latestRoadmap]}
              onDelete={handleDelete}
            />
          </div>
        )}

        {roadmaps.length > 0 && (
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-700">
                🕐 Recent Roadmaps
              </h3>
              <Link href="/history" className="text-blue-600 hover:underline text-sm">
                View All →
              </Link>
            </div>
            <HistoryList
              roadmaps={roadmaps.slice(0, 3)}
              onDelete={handleDelete}
            />
          </div>
        )}
      </div>
    </main>
  );
}