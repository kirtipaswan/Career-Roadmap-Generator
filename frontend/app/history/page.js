'use client';
import { useState, useEffect } from 'react';
import HistoryList from '../../components/HistoryList';
import { getRoadmaps } from '../../lib/api';
import Link from 'next/link';

export default function HistoryPage() {
  const [roadmaps, setRoadmaps] = useState([]);
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

  const handleDelete = (id) => {
    setRoadmaps(roadmaps.filter((r) => r._id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <h1 className="text-xl font-bold text-blue-700">
            Margdarshak AI
          </h1>
        </div>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          🏠 Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            📋 Roadmap History
          </h2>
          <p className="text-gray-500 mt-2">
            All your previously generated career roadmaps.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Loading roadmaps...</p>
          </div>
        ) : (
          <HistoryList roadmaps={roadmaps} onDelete={handleDelete} />
        )}
      </div>
    </main>
  );
}