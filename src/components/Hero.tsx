import "../styles/Hero.css";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";

import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,


} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";



function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT */}

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="hero-badge">
          🚀 Available for Full Stack Opportunities
        </div>

        <h4>Hello, I'm</h4>

       <h1 className="hero-title">
  <span className="white-name">
    Naga Josthna
  </span>

  <span className="blue-name">
    Tummala
  </span>
</h1>

        <h2>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,

              "Data Analyst",
              2000,

              "AI & ML Enthusiast",
              2000,

              "Problem Solver",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />

        </h2>

        <p>
          Passionate about building modern, scalable and intelligent web
          applications using clean code, modern UI, and emerging
          technologies. I enjoy turning ideas into impactful digital
          solutions.
        </p>

       
       

      </motion.div>
{/* RIGHT */}

<motion.div
  className="hero-right"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  <div className="image-wrapper">

  <div className="image-circle">
    <img src={profile} alt="Naga Josthna" />
  </div>

  <div className="floating-icon react-icon">
    <FaReact />
  </div>

  <div className="floating-icon java-icon">
    <FaJava />
  </div>

  <div className="floating-icon python-icon">
    <FaPython />
  </div>

  <div className="floating-icon ts-icon">
    <SiTypescript />
  </div>
   <div className="floating-icon node-icon">
    <FaNodeJs />
  </div>

</div>
  
</motion.div>

    </section>
  );
}

export default Hero;