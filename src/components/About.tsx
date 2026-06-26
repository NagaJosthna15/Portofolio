import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>INTRODUCTION</p>
        <h2>About Me</h2>
        <div className="about-line"></div>
      </motion.div>

      <div className="about-container">

        {/* LEFT CARD */}

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="nj-circle">
            NJ
          </div>

          <h3>Naga Josthna</h3>

          <h4>AI & ML • Full Stack</h4>

          <p>📍 India</p>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p>
            Hi, I'm <strong>Naga Josthna Tummala</strong>,
            an AI & ML undergraduate passionate about
            Full Stack Development, Data Analytics,
            and building impactful software solutions.
          </p>

          <p>
            I enjoy transforming ideas into scalable web
            applications and intelligent systems using
            modern technologies.
          </p>

          <p>
            My experience includes Full Stack development, workflow automation, REST API integration and Data visualization
          </p>

          <div className="about-tags">

            <span>B.Tech AIML</span>
            <span>CGPA 8.6</span>
            <span>Full Stack Developer</span>
            <span>Data Analyst</span>
            <span>Problem Solver</span>
            <span>Fast Learner</span>
            <span>Team Player</span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;