import "../styles/Projects.css";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaBrain,
  FaChartLine,
  FaMicrophone,
} from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">

        <p>FEATURED WORK</p>

        <h2>Projects</h2>

        <div className="projects-line"></div>

      </div>

      <div className="projects-grid">

        {/* CODEWAVE */}

        <motion.div
          className="project-card"
          whileHover={{ y: -10 }}
        >

          <div className="project-icon">
            <FaBrain />
          </div>

          <h3>CodeWave</h3>

          <h4>AI Powered Code Analysis Platform</h4>

          <p>
            AI-powered platform that analyzes coding solutions and provides detailed feedback on code quality, architecture, requirements fulfillment, and overall performance.
          </p>

          <ul>
            <li>AI-driven code evaluatio</li>
            <li>Code Optimization Suggestions</li>
            <li>Performance Insights</li>
          </ul>

          <div className="project-tech">

            <span>React</span>
            <span>Flask</span>
            <span>Python</span>
            <span>REST APIs</span>
            <span>JWT Auth</span>

          </div>

          <div className="project-buttons">

            <a href="https://github.com/NagaJosthna15/CodeWave">
              <FaGithub /> GitHub
            </a>

            

          </div>

        </motion.div>

        {/* FINANCE */}

        <motion.div
          className="project-card featured"
          whileHover={{ y: -10 }}
        >

          <div className="project-icon">
            <FaChartLine />
          </div>

          <h3>Personal Finance Dashboard</h3>

          <h4>Full Stack Finance Management System</h4>

          <p>
           Full-stack finance dashboard that securely connects bank accounts, tracks transactions, manages budgets, and visualizes spending patterns through interactive charts.
          </p>

          <ul>
            <li>Secure bank integration</li>
            <li>Income & expense tracking</li>
            <li> Interactive financial Analytics</li>
            
          </ul>

          <div className="project-tech">

            <span>MERN</span>
            <span>Redis</span>
            <span>Plaid API</span>
            <span>Tailwind CSS</span>
            <span>ReCharts</span>

          </div>

          <div className="project-buttons">

            <a href="https://github.com/NagaJosthna15/-pfm-dashboard-">
              <FaGithub /> GitHub
            </a>

           

          </div>

        </motion.div>

        {/* VOICE ASSISTANT */}

        <motion.div
          className="project-card"
          whileHover={{ y: -10 }}
        >

          <div className="project-icon">
            <FaMicrophone />
          </div>

          <h3>Voice Assistant</h3>

          <h4>AI Powered Voice Assistant</h4>

          <p>
            Voice assistant that accepts voice commands, processes them using Groq LLM, and responds naturally using text-to-speech technology.
          </p>

          <ul>
            <li>Voice-to-text processing</li>
            <li>AI-powered conversations</li>
            <li>Real-time voice responses</li>
          </ul>

          <div className="project-tech">

            <span>Python</span>
            <span>LangChain</span>
            <span>Groq LLM</span>
    

          </div>

          <div className="project-buttons">

            <a href="https://github.com/NagaJosthna15/Voice_Assistant">
              <FaGithub /> GitHub
            </a>

           

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;