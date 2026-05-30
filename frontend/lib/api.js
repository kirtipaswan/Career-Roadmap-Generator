const API_URL = 'http://localhost:5000/api';

export const generateRoadmap = async (data) => {
  const response = await fetch(`${API_URL}/roadmap/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getRoadmaps = async () => {
  const response = await fetch(`${API_URL}/roadmaps`);
  return response.json();
};

export const deleteRoadmap = async (id) => {
  const response = await fetch(`${API_URL}/roadmap/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};