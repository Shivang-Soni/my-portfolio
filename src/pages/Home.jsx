import React from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";
import Overlay from "../components/Overay";
import Picture from "../assets/images/ProfilePcture.png";
const projects = [
  {
    title: "Predictive Quality Control MLOps",
    desc: `End-to-End MLOps-Pipeline zur vorausschauenden Qualitätskontrolle. Das Projekt umfasst:
- Datenvorverarbeitung und Feature Engineering von CSV-Daten, Versionierung von Daten und Modellen via DVC
- Modelltraining mit Logistic Regression, Evaluation über Accuracy, Precision und Recall, Logging via MLflow
- Bereitstellung über FastAPI, Containerisierung mittels Docker, Monitoring mit Prometheus & Grafana
- Vollständig CI/CD-ready über GitHub Actions mit automatisierten Tests, Docker-Builds und DVC-Synchronisation
Dieses System ist reproduzierbar, skalierbar und für industrielle Anwendungen cloud-ready (AWS/Azure).`,
    tech: [
      "Tools: ",
      "Python, ",
      "Scikit-learn, ",
      "MLflow, ",
      "FastAPI, ",
      "Docker, ",
      "Prometheus, ",
      "Grafana, ",
      "Evidently AI, ",
      "DVC, ",
      "CI/CD"
    ],
    link: "https://github.com/Shivang-Soni/predictive-quality-control-mlops",
  },
  {
    title: "Daisy – Autonomes Sprachgesteuertes Fahrzeug",
    desc: `Autonomer 4-Rad-Roboter mit Sprachsteuerung (Whisper + LLaMA-2) und Q-Learning-Agent. Projektmerkmale:
- Embedded Systems mit ESP32, L298N Motor-Treiber und HC-SR04 Ultraschall-Sensor
- PWM-gesteuerte Motorsteuerung, Sicherheitsstopps und Hardware-/Dummy-Modus für Simulationen
- Sprachsteuerung via Whisper und LLaMA-2 RAG-LLM, MQTT-Kommunikation zwischen Python-Backend und ESP32
- Q-Learning Agent für autonome Navigation in Simulation und realer Hardware, Logging von Rewards, Sensorwerten und Aktionen
- MLOps-tauglich: Daten, Logs und Q-Tables versionierbar, Tests und Debugging für Echtzeitbetrieb
Das Projekt verbindet Reinforcement Learning, Embedded Systems und LLM-Integration in einem realen Hardware-Setup.`,
    tech: [
      "Tools: ",
      "ESP32, ",
      "Python, ",
      "Whisper, ",
      "LLaMA-2, ",
      "Q-Learning, ",
      "MQTT, ",
      "Embedded Systems, ",
      "MLOps"
    ],
    link: "https://github.com/Shivang-Soni/autonomous_robot_car",
  },
  {
    title: "Hand Gesture Detection System",
    desc: `End-to-End Handgestenerkennung in Echtzeit mit CNN, React-Frontend und FastAPI-Backend:
- Datenpipeline: ETL → Schwarz/Grau-Bilder → Augmentation → Split in Trainings-, Validierungs- und Testsets
- CNN-Training und Modell-Evaluation, Logging aller Metriken via MLflow
- Frontend in React mit Live-Kamera-Feed, Backend liefert Vorhersagen in Echtzeit
- Containerisierung via Docker und Docker-Compose, CI/CD-ready für Cloud-Deployment (AWS/Azure)
- Vollständig getestet mit Pytest (Backend) und Jest (Frontend), PEP-8-konformer, sauber kommentierter Code
Das System ist skalierbar, cloud-ready und ideal für praxisnahe End-to-End ML-Anwendungen.`,
    tech: [
      "Tools: ",
      "TensorFlow, ",
      "Python, ",
      "React, ",
      "FastAPI, ",
      "MLflow, ",
      "Docker, ",
      "CI/CD, ",
      "Pytest, ",
      "Jest"
    ],
    link: "https://github.com/Shivang-Soni/hand_gesture_detection_solution",
  },
  {
    title: "Stock Market Reinforcement Learning Agent",
    desc: `DQN-basierter Reinforcement Learning Agent für Aktienhandel mit End-to-End System:
- Custom Gym-Umgebung für historische Marktdaten, Datenpipeline für Preprocessing und Feature Engineering
- Training des DQN-Modells, Replay Buffer, Model Checkpoints, TensorBoard für Echtzeit-Monitoring
- Backend via Flask API für Triggering von Training & Vorhersagen, React Dashboard zur Visualisierung
- Containerisierung via Docker, CI/CD-ready, Cloud-Deployment-Architektur (AWS/EC2)
- Vollständig getestet mit Pytest & Jest, PEP-8-konformer Code, stabile Produktionspipeline
Dieses Projekt demonstriert tiefes Verständnis von Reinforcement Learning, Full-Stack Integration und skalierbaren ML-Systemen.`,
    tech: [
      "Tools: ",
      "PyTorch, ",
      "Python, ",
      "Flask, ",
      "React, ",
      "TensorBoard, ",
      "DQN, ",
      "Gym, ",
      "Docker, ",
      "CI/CD, ",
      "Pytest, ",
      "Jest"
    ],
    link: "https://github.com/Shivang-Soni/StockMarketRLPredictor",
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
  { skill: "LLMs (Large Language Models)", percent: 88 },
  { skill: "Fine-Tuning", percent: 84 },
  { skill: "LoRA (Low-Rank Adaptation)", percent: 82 },
  { skill: "Quantization (INT8 / INT4)", percent: 80 },
  { skill: "LangChain", percent: 80 },
  { skill: "RAG (Retrieval-Augmented Generation)", percent: 89 },
  { skill: "HuggingFace Transformers", percent: 85 },
  { skill: "AI Agents", percent: 75 },

  // --- MLOps & Cloud ---
  { skill: "MLflow", percent: 84 },
  { skill: "Docker", percent: 88 },
  { skill: "FastAPI", percent: 85 },
  { skill: "Prometheus & Grafana", percent: 80 },
  { skill: "Evidently AI", percent: 72 },
  { skill: "AWS (S3, EC2, CloudFront)", percent: 78 },

  // --- Supporting Dev Skills ---
  { skill: "React", percent: 82 },
  { skill: "Node.js", percent: 78 },
  { skill: "TypeScript", percent: 75 },
  { skill: "GitHub Actions / CI-CD", percent: 85 },
  { skill: "SQL", percent: 80 },
  { skill: "MongoDB", percent: 85 },
];


const Home = () => {
    return (
        <div className="relative min-h-screen">
            <StarBackground />
            <Overlay />
            <NavBar />
            <div className="flex flex-cols gap-40">       
           <div className="py-24 pl-24" style={{ zIndex: 10 }}><img alt="Mein Passfoto" src={Picture} className="w-[350px] rounded-md object-cover"></img></div>
            <section id="about" className="text-center py-24">
              <h2 className="text-4xl font-bold mb-4">Hallo, ich bin Shivang Soni.</h2>
                <p className="text-xl max-w-xl mx-auto text-bold">
                    „Willkommen auf meiner Portfolio-Webseite! Ich bin Shivang Soni, Machine Learning Engineer aus Indien. Hier stelle ich meine Projekte und Erfahrungen in End-to-End ML-Systemen, Deep Learning, Reinforcement Learning, MLOps und Cloud-basierten Deployments – von Datenpipelines über Modelltraining bis zu Containerisierung und Monitoring dar. Ich freue mich, Ihnen meine Arbeit zu zeigen und lade Sie ein, einen Blick auf meine Top-Projekte zu werfen.“
                </p>
            </section>
            </div>

            <section id="projects" className="text-center py-24">
                <h3 className="text-3xl font-bold mb-12 text-center">Meine Projekte</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 ">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </section>
            <section id="skills" className="text-center py-24">
               <h3 className="text-4xl font-bold mb-4">Technische Fertigkeiten</h3>
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