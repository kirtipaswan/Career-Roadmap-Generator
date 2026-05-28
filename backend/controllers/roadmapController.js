const Roadmap = require('../models/Roadmap');

// Roadmap logic based on role and experience
const generateRoadmapSteps = (targetRole, currentSkills, experienceLevel) => {
  const role = targetRole.toLowerCase();
  const level = experienceLevel.toLowerCase();

  const roadmaps = {
    'frontend developer': {
      beginner: [
        'Learn HTML5 basics and semantic elements',
        'Learn CSS3 - Flexbox, Grid and Responsive Design',
        'Learn JavaScript fundamentals (ES6+)',
        'Build 2-3 static websites for practice',
        'Learn React.js - Components, Props, State, Hooks',
        'Learn Git and GitHub basics',
        'Learn Tailwind CSS or Bootstrap',
        'Build 2 React projects and deploy on Vercel',
      ],
      intermediate: [
        'Deep dive into React.js - Context API, Redux',
        'Learn Next.js for server side rendering',
        'Learn REST API integration',
        'Improve CSS skills - Animations, Transitions',
        'Learn testing basics - Jest, React Testing Library',
        'Build a full featured project with authentication',
        'Learn deployment - Vercel, Netlify',
      ],
      experienced: [
        'Master Next.js - App Router, Server Components',
        'Learn TypeScript with React',
        'Learn performance optimization techniques',
        'Learn micro-frontend architecture',
        'Contribute to open source projects',
        'Learn CI/CD pipelines',
        'Build and deploy production grade applications',
      ],
    },
    'backend developer': {
      beginner: [
        'Learn any programming language - Node.js or Python',
        'Understand how the web works - HTTP, REST APIs',
        'Learn Node.js and Express.js basics',
        'Learn MongoDB or MySQL database basics',
        'Build simple CRUD REST APIs',
        'Learn Git and GitHub',
        'Learn Postman for API testing',
        'Deploy your first API on Render or Railway',
      ],
      intermediate: [
        'Learn authentication - JWT, OAuth',
        'Learn advanced MongoDB - Aggregations, Indexing',
        'Learn error handling and middleware in Express',
        'Learn MVC architecture pattern',
        'Learn Redis for caching',
        'Build a complete backend for a real project',
        'Learn Docker basics',
      ],
      experienced: [
        'Learn microservices architecture',
        'Master Docker and Kubernetes',
        'Learn message queues - RabbitMQ or Kafka',
        'Learn GraphQL',
        'Learn system design principles',
        'Optimize API performance and scalability',
        'Learn CI/CD and DevOps practices',
      ],
    },
    'full stack developer': {
      beginner: [
        'Learn HTML, CSS and JavaScript fundamentals',
        'Learn React.js for frontend',
        'Learn Node.js and Express.js for backend',
        'Learn MongoDB for database',
        'Build your first full stack MERN project',
        'Learn Git and GitHub',
        'Learn REST API design',
        'Deploy frontend on Vercel and backend on Render',
      ],
      intermediate: [
        'Learn Next.js for full stack development',
        'Learn JWT authentication',
        'Learn state management - Redux or Context API',
        'Learn Tailwind CSS for styling',
        'Build 2-3 complete full stack projects',
        'Learn Docker basics',
        'Learn SQL databases - MySQL or PostgreSQL',
      ],
      experienced: [
        'Master Next.js App Router and Server Actions',
        'Learn TypeScript',
        'Learn system design',
        'Learn microservices and Docker',
        'Learn CI/CD pipelines',
        'Contribute to open source',
        'Build and scale production applications',
      ],
    },
    'data scientist': {
      beginner: [
        'Learn Python fundamentals',
        'Learn NumPy and Pandas for data manipulation',
        'Learn data visualization - Matplotlib, Seaborn',
        'Learn statistics and probability basics',
        'Learn Scikit-learn for machine learning',
        'Work on beginner Kaggle datasets',
        'Learn Jupyter Notebook',
      ],
      intermediate: [
        'Learn advanced machine learning algorithms',
        'Learn feature engineering techniques',
        'Learn SQL for data querying',
        'Learn deep learning basics with TensorFlow or PyTorch',
        'Work on real world projects',
        'Learn model deployment with Flask or FastAPI',
      ],
      experienced: [
        'Master deep learning and neural networks',
        'Learn NLP - Natural Language Processing',
        'Learn MLOps and model deployment at scale',
        'Learn big data tools - Spark, Hadoop',
        'Publish research or Kaggle competition wins',
        'Learn cloud ML services - AWS SageMaker or GCP',
      ],
    },
    'devops engineer': {
      beginner: [
        'Learn Linux command line basics',
        'Learn Git and GitHub',
        'Learn Docker - containers and images',
        'Learn basic networking concepts',
        'Learn CI/CD with GitHub Actions',
        'Learn cloud basics - AWS or Azure free tier',
      ],
      intermediate: [
        'Learn Kubernetes for container orchestration',
        'Learn Infrastructure as Code - Terraform',
        'Learn monitoring tools - Prometheus, Grafana',
        'Learn advanced CI/CD pipelines',
        'Learn scripting - Bash or Python',
        'Get AWS or Azure certification',
      ],
      experienced: [
        'Master Kubernetes in production',
        'Learn service mesh - Istio',
        'Learn advanced cloud architecture',
        'Learn security best practices - DevSecOps',
        'Learn cost optimization in cloud',
        'Design high availability systems',
      ],
    },
  };

  // Find matching role
  for (const key of Object.keys(roadmaps)) {
    if (role.includes(key) || key.includes(role)) {
      return roadmaps[key][level] || roadmaps[key]['beginner'];
    }
  }

  // Default roadmap if role not found
  return [
    `Research the skills required for ${targetRole}`,
    'Learn the fundamentals of your chosen field',
    'Take online courses on Coursera or Udemy',
    'Build 2-3 practice projects',
    'Create a strong GitHub profile',
    'Network on LinkedIn with professionals in your field',
    'Apply for internships or entry level roles',
    'Keep learning and stay updated with industry trends',
  ];
};

// @desc    Generate and save roadmap
// @route   POST /api/roadmap/generate
const generateRoadmap = async (req, res) => {
  try {
    const { targetRole, currentSkills, experienceLevel } = req.body;

    if (!targetRole || !currentSkills || !experienceLevel) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const roadmapSteps = generateRoadmapSteps(targetRole, currentSkills, experienceLevel);

    const roadmap = await Roadmap.create({
      targetRole,
      currentSkills,
      experienceLevel,
      roadmap: roadmapSteps,
    });

    res.status(201).json(roadmap);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all roadmaps
// @route   GET /api/roadmaps
const getRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find().sort({ createdAt: -1 });
    res.status(200).json(roadmaps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a roadmap
// @route   DELETE /api/roadmap/:id
const deleteRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);

    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    await roadmap.deleteOne();
    res.status(200).json({ message: 'Roadmap deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { generateRoadmap, getRoadmaps, deleteRoadmap };