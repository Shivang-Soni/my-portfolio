import React from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";
import Overlay from "../components/Overay";

const projects = [
  {
    title: "Predictive Quality Control MLOps",
    description:
      "End-to-End MLOps-System zur vorausschauenden Qualitätskontrolle mit Datenversionierung (DVC), MLflow-Tracking, FastAPI-Deployment, Monitoring (Prometheus + Grafana) und CI/CD via GitHub Actions.",
    tech: [
      "Python",
      "Scikit-learn",
      "MLflow",
      "FastAPI",
      "Docker",
      "Prometheus",
      "Grafana",
      "Evidently AI",
    ],
    github: "https://github.com/Shivang-Soni/predictive_quality_control",
  },
  {
    title: "Daisy – Autonomes Sprachgesteuertes Fahrzeug",
    description:
      "Autonomer 4-Rad-Roboter mit Sprachsteuerung (Whisper + LLaMA-2) und Q-Learning-Agent. Kombination aus Embedded Systems, Reinforcement Learning und LLM-Integration in realer Hardware-Umgebung.",
    tech: [
      "ESP32",
      "Python",
      "Whisper",
      "LLaMA-2",
      "Q-Learning",
      "MQTT",
      "Embedded Systems",
      "MLOps",
    ],
    github: "https://github.com/Shivang-Soni/daisy_autonomous_vehicle",
  },
  {
    title: "Hand Gesture Detection System",
    description:
      "Echtzeit-Handgestenerkennung mit CNN, FastAPI-Backend, React-Frontend, MLflow-Monitoring, Docker-Deployment und CI/CD. Vollständig getestet mit Pytest & Jest, PEP-8-konformem Code und Cloud-ready Architektur.",
    tech: [
      "TensorFlow",
      "React",
      "FastAPI",
      "Python",
      "MLflow",
      "Docker",
      "CI/CD",
      "Pytest",
      "Jest",
    ],
    github: "https://github.com/Shivang-Soni/hand_gesture_detection_solution",
  },
];



const skills = [
  // --- Core Machine Learning ---
  { skill: "Python", percent: 95 },
  { skill: "Scikit-learn", percent: 90 },
  { skill: "TensorFlow", percent: 88 },
  { skill: "Keras", percent: 85 },
  { skill: "Pandas", percent: 90 },
  { skill: "NumPy", percent: 90 },

  // --- Generative AI & LLMs ---
  { skill: "Generative AI", percent: 94 },
  { skill: "LLMs", percent: 88 },
  { skill: "Fine-Tuning", percent: 80 },
  { skill: "LangChain", percent: 80 },
  { skill: "RAG (Retrieval-Augmented Generation)", percent: 89 },
  { skill: "HuggingFace Transformers", percent: 85 },
  { skill: "AI Agents", percent: 70 },

  // --- MLOps & Cloud ---
  { skill: "MLflow", percent: 84 },
  { skill: "Docker", percent: 88 },
  { skill: "FastAPI", percent: 85 },
  { skill: "Prometheus & Grafana", percent: 80 },
  { skill: "Evidently AI", percent: 70 },
  { skill: "AWS (S3, EC2, CloudFront)", percent: 70 },

  // --- Supporting Dev Skills ---
  { skill: "React", percent: 80 },
  { skill: "Node.js", percent: 75 },
  { skill: "Typescript", percent: 70 },
  { skill: "GitHub / CI-CD", percent: 85 },
  { skill: "SQL", percent: 80 },
  { skill: "MongoDB", percent: 85 },
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
                    „Willkommen auf meiner Portfolio-Webseite! Ich bin Shivang Soni, Machine Learning Engineer aus Jaipur. Hier präsentiere ich meine Projekte und Erfahrungen in End-to-End ML-Systemen, Deep Learning, Reinforcement Learning, MLOps und Cloud-basierten Deployments – von Datenpipelines über Modelltraining bis zu Containerisierung und Monitoring. Ich freue mich, Ihnen meine Arbeit zu zeigen und lade Sie ein, einen Blick auf meine Top-Projekte zu werfen.“
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