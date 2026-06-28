import "../styles/Experience.css";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-header">

        <p>JOURNEY</p>

        <h2>Experience</h2>

        <div className="heading-line"></div>

      </div>

      <div className="timeline">

        {/* INFYNTEREK */}

        <motion.div
          className="timeline-item left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="timeline-content">
            <div className="exp-header">

            <span className="exp-date">
              SEP 2025 – DEC 2025
            </span>
            

            <span className="exp-badge">
              Internship
            </span>
            </div>

            <h3>Web Development Intern</h3>

            <h4>Infynterek Systems</h4>

            <ul>
              <li>Worked on Full Stack Development projects</li>
              <li>Built responsive user interfaces</li>
              <li>Improved website functionality and performance</li>
            </ul>

           
          </div>

          <div className="timeline-dot"></div>

        </motion.div>

        {/* TECHNICAL HUB */}

        <motion.div
          className="timeline-item right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="timeline-content">
            <div className="exp-header">

            <span className="exp-date">
              MAY 2025 – JUNE 2025
            </span>
            

            <span className="exp-badge">
              Internship
            </span>
            </div>

            <h3>Data Specialist Intern</h3>

            <h4>Technical Hub Pvt Ltd</h4>

            <ul>
              <li>
                Automated workflows using Power Automate
              </li>

              <li>
                Created dashboards and reports
              </li>

              <li>
                Collaborated with teams to streamline processes
              </li>
            </ul>

           

          </div>

          <div className="timeline-dot"></div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;