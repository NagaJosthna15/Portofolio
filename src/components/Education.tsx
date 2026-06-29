import "../styles/Education.css";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="education">

      <div className="section-header">
        <span>ACADEMICS</span>
        <h2>Education</h2>
      </div>

      <div className="education-timeline">

        {/* BTECH */}

        <div className="education-item">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-card">

            <span className="edu-year">
              2023 – 2027
            </span>

            <h3>
              Aditya College of Engineering and Technology
            </h3>

            <p>
              B.Tech – Artificial Intelligence & Machine Learning
            </p>

            <h4>
              CGPA: 8.6
            </h4>

          </div>

        </div>

        {/* INTERMEDIATE */}

        <div className="education-item">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-card">

            <span className="edu-year">
              2021 – 2023
            </span>

            <h3>
              Sri Chaitanya Junior College
            </h3>

            <p>
              Intermediate
            </p>

            <h4>
              Percentage: 89%
            </h4>

          </div>

        </div>

        {/* SSC */}

        <div className="education-item">

          <div className="education-icon">
            <FaSchool />
          </div>

          <div className="education-card">

            <span className="edu-year">
              2020 – 2021
            </span>

            <h3>
              Loyola E.M School
            </h3>

            <p>
              SSC
            </p>

            <h4>
              GPA: 9.7
            </h4>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;