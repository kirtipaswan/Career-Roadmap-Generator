'use client';
import { useState } from 'react';
import { deleteRoadmap } from '../lib/api';

export default function RoadmapCard({ roadmap, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    setDeleting(true);
    try {
      await deleteRoadmap(roadmap._id);
      setShowConfirm(false);
      setDeleted(true);
      setTimeout(() => {
        onDelete(roadmap._id);
      }, 1500);
    } catch (err) {
      console.error('Error deleting roadmap:', err);
    } finally {
      setDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  // Show success message before removing card
  if (deleted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 w-full text-center">
        <p className="text-green-600 font-semibold text-lg">✅ Roadmap deleted successfully!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            🎯 {roadmap.targetRole}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Skills: {roadmap.currentSkills}
          </p>
          <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full capitalize">
            {roadmap.experienceLevel}
          </span>
        </div>
        <button
          onClick={handleDeleteClick}
          className="text-red-400 hover:text-red-600 text-sm font-medium transition"
        >
          🗑️ Delete
        </button>
      </div>

      {/* Confirm Delete Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              🗑️ Delete Roadmap?
            </h3>
            <p className="text-gray-500 mb-6">
              Do you really want to delete the roadmap for <span className="font-semibold text-gray-700">"{roadmap.targetRole}"</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleConfirmDelete}
                disabled={deleting}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
              >
                {deleting ? 'Deleting...' : 'Yes, Delete'}
              </button>
              <button
                onClick={handleCancelDelete}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg transition"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Roadmap Steps */}
      <ol className="space-y-2 mt-4">
        {roadmap.roadmap.map((step, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="min-w-[28px] h-7 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {index + 1}
            </span>
            <p className="text-gray-700 text-sm pt-1">{step}</p>
          </li>
        ))}
      </ol>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-5 text-right">
        Generated on: {new Date(roadmap.createdAt).toLocaleString()}
      </p>
    </div>
  );
}