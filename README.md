<img width="1912" height="976" alt="dashboard_mini-career-roadmap" src="https://github.com/user-attachments/assets/4b224288-d574-406c-8a77-47fd48cbdd29" />
<img width="1281" height="785" alt="form_mini-career-roadmap" src="https://github.com/user-attachments/assets/04a40d0c-7135-4a38-8268-594329645ef1" />
<img width="1205" height="785" alt="generating radmap" src="https://github.com/user-attachments/assets/4343289e-3da1-446b-8ab2-bdec7698964b" />
<img width="1165" height="702" alt="generated-roadmap" src="https://github.com/user-attachments/assets/11ca7626-a337-4fa6-a6a1-bcc6d0ed393d" />
<img width="1918" height="913" alt="created roadmap- (post api)" src="https://github.com/user-attachments/assets/61b42e30-1715-40a6-a731-b9a0ee853e46" />
<img width="1916" height="958" alt="history" src="https://github.com/user-attachments/assets/77b4a282-b246-451d-9454-e51fc74d8505" />
<img width="1916" height="958" alt="history" src="https://github.com/user-attachments/assets/77b4a282-b246-451d-9454-e51fc74d8505" />


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

```
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
```

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

Create `.env` file in backend folder:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

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
