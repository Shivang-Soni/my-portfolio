import React from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";
import Overlay from "../components/Overay";

const projects = [
  {
    title: "Stock Market RL Predictor",
    desc: "Engineered a custom Deep Q-Network (DQN) based trading environment in Python, capable of predicting stock market movements. Designed a complete data pipeline to ingest, preprocess, and analyze historical market data. Integrated automated trading predictions via a Flask API, enabling seamless interaction between backend algorithms and frontend applications. Developed an interactive React-based frontend, allowing users to trigger training and prediction workflows while visualizing performance metrics through TensorBoard. This project highlights expertise in reinforcement learning, full-stack development, and end-to-end AI system design.",
    tech: "Python, Reinforcement Learning, DQN, TensorBoard, Flask API, React, Node.js, Express, EJS, HTML, CSS",
    link: "https://github.com/Shivang-Soni/StockMarketRLPredictor"
  },
  {
    title: "Full Stack Auth Web App",
    desc: "Built a secure, scalable full-stack authentication system employing Node.js, Express.js, MongoDB, and Passport.js. Implemented user registration, login, logout, and session management using MVC architecture, along with secure password hashing via bcryptjs to ensure data integrity. Designed responsive front-end interfaces using EJS, Bootstrap, Google Fonts, and custom CSS backgrounds, ensuring an intuitive and visually appealing user experience. The project demonstrates comprehensive full-stack development skills, database modeling, security best practices, and front-end design capabilities.",
    tech: "HTML, CSS, Node.js, Express, React, MongoDB, EJS",
    link: "https://github.com/Shivang-Soni/node-auth-app"
  },
  {
    title: "Disaster Tweets Classifier",
    desc: "Developed a Natural Language Processing (NLP) pipeline to classify tweets as disaster-related or not. The project covers end-to-end processing: data cleaning (removing hashtags, emojis, and special characters), tokenization, and feature engineering with TF-IDF. Implemented baseline models like Logistic Regression for interpretability and advanced transformer-based models (BERT, RoBERTa) for state-of-the-art performance. Additional experiments included hyperparameter tuning, model ensembling, and data augmentation to boost accuracy. This project highlights strong expertise in text classification, modern deep learning architectures, and hands-on experience with real-world Kaggle datasets.",
    tech: "Python, Scikit-learn, TensorFlow, HuggingFace Transformers (BERT, RoBERTa), NLP, Machine Learning Pipelines",
    link: "https://github.com/Shivang-Soni/disaster-tweets-classifier"
  },
  {
  title: "Facial Emotion Detection",
  desc: "Developed a Convolutional Neural Network (CNN)-based system using TensorFlow and OpenCV for real-time facial emotion recognition. Trained the model on a labeled dataset covering emotions like happy, sad, angry, surprised, and neutral, with optimizations for efficient execution on consumer-grade hardware. The project was recognized for innovation and practical application, being selected for the Smart India Hackathon 2021. This demonstrates expertise in computer vision, deep learning, model optimization, and real-time application development.",
  tech: "Python, TensorFlow, OpenCV, CNN, Computer Vision, Real-time Applications, Deep Learning",
  link: "https://www.linkedin.com/feed/update/urn:li:activity:6947245312335822848/"
}
];

const skills = [
  { skill: "Python", percent: 90 },
  { skill: "C++", percent: 75 },
  { skill: "Java", percent: 70 },
  { skill: "React", percent: 80 },
  { skill: "HTML/CSS/JS", percent: 70 },
  { skill: "TensorFlow/Keras", percent: 70 },
  { skill: "Blender", percent: 95 }
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