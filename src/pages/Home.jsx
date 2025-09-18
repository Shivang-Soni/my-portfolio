import React from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";
import Overlay from "../components/Overay";

const projects = [
  {
    title: "Predictive Quality Control MLOps Project",
    desc: "Built an end-to-end ML pipeline for predictive defect severity classification. Conducted data preprocessing, feature engineering, model training, evaluation, and monitoring. Implemented dataset and model versioning using DVC with MinIO for reproducibility. Deployed FastAPI services in Docker/Docker-Compose, ensuring containerized scalability. Monitored model performance using Prometheus and Grafana, configured alerts, and conducted unit and integration tests to guarantee pipeline reliability. Optimized workflow for industrial-grade applications, emphasizing maintainability, performance, and production readiness.",
    tech: "Python, Scikit-learn, DVC, MinIO, FastAPI, Docker, Docker-Compose, Prometheus, Grafana, ML Monitoring",
    link: "https://github.com/Shivang-Soni/predictive-quality-control-mlops"
  },
  {
    title: "Autonomous Robot Car with Voice Control Prototype",
    desc: "Developed a 4-wheeled autonomous robot using ESP32, motor driver, DC motors, HC-SR04 sensor, and battery. Implemented voice control via Whisper and RAG-based LLM for command recognition. Integrated Q-Learning agent for obstacle avoidance and adaptive learning in both simulation and hardware. Designed modular software architecture for motor control, sensor processing, MQTT communication, logging, and incremental training. Performed extensive testing with dummy-mode, safety checks, and performance monitoring. Project demonstrates expertise in embedded systems, robotics, AI-driven control, and deployment of autonomous agents.",
    tech: "ESP32, Motor Driver, DC Motors, HC-SR04, Python, Whisper, RAG, LLM, Q-Learning, MQTT, Embedded Systems, Robotics, Simulation",
    link: "https://github.com/Shivang-Soni/autonomous_robot_car"
  },
  {
    title: "Stock Market RL Predictor",
    desc: "Engineered a custom Deep Q-Network (DQN) based trading environment in Python, capable of predicting stock market movements. Built a complete data pipeline to ingest, preprocess, and analyze historical market data. Integrated automated trading predictions via a Flask API for seamless backend-frontend interaction. Developed an interactive React-based frontend to trigger training and prediction workflows while visualizing performance metrics using TensorBoard. Implemented logging, monitoring, and error handling to ensure stability and reproducibility. Project highlights expertise in reinforcement learning, full-stack development, and end-to-end AI system design for financial applications.",
    tech: "Python, Reinforcement Learning, DQN, TensorBoard, Flask API, React, Node.js, Express, EJS, HTML, CSS",
    link: "https://github.com/Shivang-Soni/StockMarketRLPredictor"
  },
  {
  title: "Full Stack Auth Web App",
  desc: "Built a secure, scalable full-stack authentication system using Node.js, Express.js, MongoDB, and Passport.js. Implemented user registration, login, logout, and session management using MVC architecture, with secure password hashing via bcryptjs. Designed responsive front-end interfaces with EJS, Bootstrap, Google Fonts, and custom CSS backgrounds for an intuitive and visually appealing user experience. Added input validation, error handling, and comprehensive testing to ensure robustness. Deployed the application in Docker containers for scalable and reproducible environments. Project demonstrates comprehensive full-stack development, database modeling, security best practices, seamless backend-frontend integration, and readiness for real-world production deployment.",
  tech: "HTML, CSS, Node.js, Express, React, MongoDB, EJS",
  link: "https://github.com/Shivang-Soni/node-auth-app"
},
  {
  title: "Disaster Tweets Classifier",
  desc: "Developed a Natural Language Processing (NLP) pipeline to classify tweets as disaster-related or not. Conducted full data processing including cleaning, tokenization, and feature engineering with TF-IDF. Implemented Logistic Regression as baseline and advanced transformer-based models (BERT, RoBERTa) for state-of-the-art performance. Applied hyperparameter tuning, model ensembling, and data augmentation to boost accuracy. Evaluated model performance with precision, recall, and F1 metrics, and conducted thorough error analysis to identify edge cases. Prepared deployment-ready pipeline with reproducible steps and integrated testing for robustness. Project demonstrates expertise in NLP, modern deep learning architectures, machine learning pipelines, handling large-scale real-world datasets, and designing solutions for practical deployment scenarios.",
  tech: "Python, Scikit-learn, TensorFlow, HuggingFace Transformers (BERT, RoBERTa), NLP, Machine Learning Pipelines",
  link: "https://github.com/Shivang-Soni/disaster-tweets-classifier"
},
  {
  title: "Facial Emotion Detection",
  desc: "Developed a Convolutional Neural Network (CNN) system using TensorFlow and OpenCV for real-time facial emotion recognition. Trained on labeled datasets covering happy, sad, angry, surprised, and neutral emotions, optimized for consumer-grade hardware. Applied data augmentation, hyperparameter tuning, and model optimization techniques for enhanced accuracy and efficiency. Implemented evaluation metrics, cross-validation, and robust testing to ensure reliable predictions. Integrated the model into an application framework for real-time inference, monitoring performance, and handling edge cases. Selected for Smart India Hackathon 2021 for innovation and practical application. Project demonstrates expertise in computer vision, deep learning, real-time application deployment, performance optimization, and end-to-end AI solution design.",
  tech: "Python, TensorFlow, OpenCV, CNN, Computer Vision, Real-time Applications, Deep Learning",
  link: "https://www.linkedin.com/feed/update/urn:li:activity:6947245312335822848/"
}
];



const skills = [
 { skill: "Python", percent: 90 },
{ skill: "Generative AI", percent: 85 },
{ skill: "LLMs", percent: 70 },
{ skill: "React", percent: 80 },
{ skill: "Fine-Tuning", percent: 80 },
{ skill: "HuggingFace", percent: 85 },
{ skill: "Transformers", percent: 80 },
{ skill: "TensorFlow", percent: 70 },
{ skill: "Keras", percent: 75 },
{ skill: "Scikit-learn", percent: 75 },
{ skill: "Pandas", percent: 75 },
{ skill: "C++", percent: 75 },
{ skill: "FastAPI", percent: 75 },
{ skill: "AI Agents", percent: 75 },
{ skill: "LangChain", percent: 75 },
{ skill: "RAG", percent: 75 },
{ skill: "SQL", percent: 70 },
{ skill: "JavaScript", percent: 70 },
{ skill: "HTML", percent: 70 },
{ skill: "CSS", percent: 70 },
{ skill: "Java", percent: 78 },
{ skill: "Jupyter", percent: 75 },
{ skill: "MongoDB", percent: 70 },
{ skill: "Docker", percent: 70 },
{ skill: "Docker-Compose", percent: 70 },
{ skill: "Matplotlib", percent: 80 },
{ skill: "EJS", percent: 70 },
{ skill: "GitHub", percent: 85 },
{ skill: "MLflow", percent: 65 },
{ skill: "Vector Databases", percent: 70 },
{ skill: "Postman", percent: 70 },
{ skill: "Evidently AI", percent: 60 },
{ skill: "Prometheus", percent: 60 },
{ skill: "Grafana", percent: 60 },
{ skill: "MQTT", percent: 60 }

];
const Home = () => {
    return (
        <div className="relative min-h-screen">
            <StarBackground />
            <Overlay />
            <NavBar />
            <section id="about" className="text-center py-24">
                <h2 className="text-4xl font-bold mb-4">Hi, I am Shivang Soni.</h2>
                <p className="text-xl max-w-xl mx-auto text-bold">
                    “I am a Full-Stack Developer and AI Enthusiast from Jaipur, Rajasthan, passionate about transforming complex problems into intelligent, real-world solutions. Combining expertise in Machine Learning, Deep Learning, and Data Science with robust software development skills, I create scalable, efficient, and impactful systems. My work bridges innovation and practicality, turning data into actionable insights and ideas into transformative technology.”
                </p>
            </section>
            <section id="projects" className="text-center py-24">
                <h3 className="text-3xl font-bold mb-12 text-center">My Projects</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 ">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </section>
            <section id="skills" className="text-center py-24">
               <h3 className="text-4xl font-bold mb-4">Skills</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 ">
                    {skills.map((skill, idx) => (
                        <SkillBar key={idx} {...skill} />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;