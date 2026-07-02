import "../styles/Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaPaperPlane,
  FaMagic,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-header">
        <span>GET IN TOUCH</span>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <p>
            Open to opportunities, collaborations, and conversations.
          </p>

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>EMAIL</span>
              <h4>jyoshnajyoo1415@gmail.com</h4>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <span>PHONE</span>
              <h4>+91 63005 70719</h4>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaLinkedin />
            </div>

            <div>
              <span>LINKEDIN</span>
              <h4>linkedin.com/in/josthnatummala159/</h4>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaGithub />
            </div>

            <div>
              <span>GITHUB</span>
              <h4>github.com/NagaJosthna15</h4>
            </div>
          </div>

          <div className="contact-buttons">

            <a href="/resume.pdf" className="resume-btn">
              <FaDownload />
              Resume
            </a>

            <a href="#contact" className="hire-btn">
              <FaMagic />
              Hire Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form">

          <h3>Send a Message</h3>

          <label>YOUR NAME</label>
          <input
            type="text"
            placeholder="John Doe"
          />

          <label>EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="you@example.com"
          />

          <label>MESSAGE</label>

          <textarea
            rows={7}
            placeholder="Tell me about your project or opportunity..."
          ></textarea>

          <a
            href="mailto:jyoshnajyoo1415@gmail.com"
            className="send-btn"
          >
            Send Message
            <FaPaperPlane />
          </a>

        </div>

      </div>

      {/* CAREER OBJECTIVE */}

      <div className="career-objective">

        <h3>Career Objective</h3>

        <p>
          As a motivated Full Stack Developer and AI & ML student,
          I'm seeking opportunities where I can contribute,
          learn, and grow while building innovative software
          solutions that create real-world impact.
        </p>

      </div>

      {/* FOOTER */}

      <footer className="footer">

        <h3>Naga Josthna Tummala</h3>

        <p>
          Built with Passion, Innovation, and Code.
        </p>

        <div className="footer-socials">

          <a href="https://github.com/NagaJosthna15">
            <FaGithub />
          </a>

          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>

          <a href="mailto:jyoshnajyoo1415@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <span>
          © 2027 Naga Josthna Tummala. All rights reserved.
        </span>

      </footer>

    </section>
  );
}

export default Contact;