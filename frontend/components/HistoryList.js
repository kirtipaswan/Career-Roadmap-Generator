'use client';
import RoadmapCard from './RoadmapCard';

export default function HistoryList({ roadmaps, onDelete }) {
  if (roadmaps.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">🗺️ No roadmaps generated yet!</p>
        <p className="text-gray-400 text-sm mt-2">
          Fill the form above to generate your first roadmap.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {roadmaps.map((roadmap) => (
        <RoadmapCard
          key={roadmap._id}
          roadmap={roadmap}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}