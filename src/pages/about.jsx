import React, { useState } from "react";
import Header from "../components/header";
import Skill from "../components/skill";
import Education from "../components/education";
import Experience from "../components/experience";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function About() {
  const langue = useSelector((data) => data.langue);
  const about = useSelector((data) => data.about);
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (target) => {
    setActiveTab(target);
  };
  const skills = useSelector((data) => data.skills);
  const educations = useSelector((data) => data.educations[langue]);
  const experiences = useSelector((data) => data.experiences[langue]);
  return (
    <>
      <Header />
      <section className="about-section section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-heading={about[langue][0]}>{about[langue][1]}</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-img">
              <div className="img-box inner-shadow">
                <img src="img/bilal.jpg" alt="" className="outer-shadow" />
              </div>
              <div className="social-link">
                <a
                  href="https://web.facebook.com/profile.php?id=100008463370690"
                  target="_blank"
                  className=" outer-shadow hover-in-shadow"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/bilaldaoudi/"
                  target="_blank"
                  className=" outer-shadow hover-in-shadow"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/bilaldaoudi591/"
                  target="_blank"
                  className=" outer-shadow hover-in-shadow"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/BilalDaoudi"
                  target="_blank"
                  className=" outer-shadow hover-in-shadow"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="about-info">
              <p>
                <span>{about[langue][2]}</span> {about[langue][3]}
              </p>
              <Link
                target="_blank"
                to="img/cv/CVenAnglais.pdf"
                className="btn-1 outer-shadow hover-in-shadow"
              >
                {about[langue][4]}
              </Link>
              <Link
                target="_blank"
                to="img/cv/CVenFrancais.pdf"
                className="btn-1 outer-shadow hover-in-shadow"
              >
                {about[langue][5]}
              </Link>
              <Link
                to="/projects"
                className="link-item btn-1 outer-shadow hover-in-shadow"
              >
                {about[langue][6]}
              </Link>
              <Link
                to="/contact"
                className="link-item btn-1 outer-shadow hover-in-shadow"
              >
                {about[langue][7]}
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="about-tabs">
              <span
                className={`tab-items outer-shadow ${
                  activeTab === "experience" ? "active" : ""
                }`}
                onClick={() => handleTabClick("experience")}
              >
                {about[langue][10]}
              </span>
              <span
                className={`tab-items outer-shadow ${
                  activeTab === "skills" ? "active" : ""
                }`}
                onClick={() => handleTabClick("skills")}
              >
                {about[langue][8]}
              </span>
              <span
                className={`tab-items outer-shadow ${
                  activeTab === "education" ? "active" : ""
                }`}
                onClick={() => handleTabClick("education")}
              >
                {about[langue][9]}
              </span>
            </div>
          </div>
          <div className="row">
            <div
              className={`experience tab-content ${
                activeTab === "experience" ? "active" : ""
              }`}
            >
              <div className="row">
                <div className="timeline">
                  <div className="row" id="experiences">
                    {experiences.map((experience, index) => (
                      <Experience
                        key={index}
                        date={experience.date}
                        titre={experience.titre}
                        description={experience.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className={`skills tab-content ${
                activeTab === "skills" ? "active" : ""
              }`}
            >
              <div className="row" id="skills">
                {skills.map((skill, index) => (
                  <Skill
                    key={index}
                    titre={skill.titre}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className={`education tab-content ${
                activeTab === "education" ? "active" : ""
              }`}
            >
              <div className="row">
                <div className="timeline">
                  <div className="row" id="educations">
                    {educations.map((education, index) => (
                      <Education
                        key={index}
                        date={education.date}
                        titre={education.titre}
                        description={education.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
