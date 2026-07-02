import "../styles/Certifications.css";
import { FaAward } from "react-icons/fa";

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <div className="section-header">
        <span>CREDENTIALS</span>
        <h2>Certifications</h2>
      </div>

      <div className="cert-grid">

        <div className="cert-card">
          <div className="cert-icon">
            <FaAward />
          </div>
          <h3>Oracle Certified Java Foundation Associate</h3>
        </div>

        <div className="cert-card">
          <div className="cert-icon">
            <FaAward />
          </div>
          <h3>Red Hat Python Course Completion</h3>
        </div>

        <div className="cert-card">
          <div className="cert-icon">
            <FaAward />
          </div>
          <h3>Cisco CLA – Programming Essentials in C</h3>
        </div>

        <div className="cert-card">
          <div className="cert-icon">
            <FaAward />
          </div>
          <h3>Snowflake SnowPro Associate</h3>
        </div>

        <div className="cert-card">
          <div className="cert-icon">
            <FaAward />
          </div>
          <h3>Google Cloud Certified Data Analytics</h3>
        </div>

      </div>

    </section>
  );
}

export default Certifications;