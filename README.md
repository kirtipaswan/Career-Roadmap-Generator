# 🚀 Mini Career Roadmap Generator

A Full Stack web application inspired by **Margdarshak AI** that generates personalized career roadmaps based on your target role, current skills, and experience level.

## 🌐 Live Demo
[👉 Click here to view the app](https://career-roadmap-generator-five.vercel.app/)

## 🛠️ Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (Frontend) + Render (Backend)

## ✨ Features

- 🗺️ Generate personalized career roadmaps
- 🎯 Supports roles — Frontend, Backend, Full Stack, Data Science, DevOps
- 💾 Save roadmap history to MongoDB database
- 📋 View all previously generated roadmaps
- 🗑️ Delete roadmaps with confirmation dialog
- ⏱️ Shows generated date and time for each roadmap

## 📁 Project Structure
Career-Roadmap-Generator/
├── backend/
│   ├── config/db.js
│   ├── controllers/roadmapController.js
│   ├── models/Roadmap.js
│   ├── routes/roadmap.js
│   └── server.js
├── frontend/
│   ├── app/
│   │   ├── page.js
│   │   └── history/page.js
│   ├── components/
│   │   ├── RoadmapForm.js
│   │   ├── RoadmapCard.js
│   │   └── HistoryList.js
│   └── lib/api.js
└── README.md

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### 1. Clone the repository
```bash
git clone https://github.com/kirtipaswan/Career-Roadmap-Generator.git
cd Career-Roadmap-Generator
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create `.env` file:
MONGO_URI=your_mongodb_connection_string
PORT=5000

```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/roadmap/generate | Generate and save a new roadmap |
| GET | /api/roadmaps | Get all saved roadmaps |
| DELETE | /api/roadmap/:id | Delete a roadmap by ID |

## 👩‍💻 Author

**Kirti Paswan**
- GitHub: [@kirtipaswan](https://github.com/kirtipaswan)
- LinkedIn: [linkedin.com/in/kirtipaswan](https://linkedin.com/in/kirtipaswan)
