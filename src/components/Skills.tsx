import "../styles/Skills.css";
import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-header">
        <p>TECH STACK</p>
        <h2>Skills & Expertise</h2>
        <div className="skills-line"></div>
      </div>

      <div className="skills-grid">

        <motion.div
          className="skill-card"
          whileHover={{ y: -10 }}
        >
          <div className="skill-title">  
          <div className="skill-icon">
            <FaCode />
            </div>
            <h3>Programming Languages</h3>
          </div>

          <div className="skill-tags">
            <span>Java</span>
            <span>Python</span>
            <span>C</span>
            <span>SQL</span>
          </div>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ y: -10 }}
        >
          <div className="skill-title">  
          <div className="skill-icon">
            <FaLaptopCode />
          </div>
            <h3>Full Stack</h3>
          </div>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>REST APIs</span>
          </div>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ y: -10 }}
        >
          <div className="skill-title">  
          <div className="skill-icon">
            <FaDatabase />
          </div>
            <h3>Databases</h3>
          </div>

          <div className="skill-tags">
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ y: -10 }}
        >
          <div className="skill-title">  
          <div className="skill-icon">
            <FaChartBar />
          </div>
            <h3>Data & Automation</h3>
          </div>

          <div className="skill-tags">
            <span>Excel</span>
            <span>SharePoint</span>
            <span>Power BI</span>
            <span>Power Automate</span>
            <span>Power Apps</span>


          </div>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ y: -10 }}
        >
          <div className="skill-title">  
          <div className="skill-icon">
            <FaTools />
            </div>
            <h3>Tools</h3>
          </div>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Docker</span>
            <span>Postman</span>
          </div>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ y: -10 }}
        >
          <div className="skill-title">
          <div className="skill-icon">
            <FaBrain />
            </div>
            <h3>Core Concepts</h3>
          </div>

          <div className="skill-tags">
            <span>DSA</span>
            <span>OOPS</span>
            <span>Machine Learning</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Skills;