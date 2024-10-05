import React, { useState } from "react";

import Header from "../components/header";
import Project from "../components/project";
import { useSelector } from "react-redux";
function Projects() {
  
  const langue = useSelector((data) => data.langue);
  const allprojects = useSelector((data) => data.projects);
  const [projects, setProjects] = useState(allprojects);
  const ChangeProject = (type) => {
    if (type === "Static")
      setProjects(allprojects.filter((p) => p.type === "Static"));
    else if (type === "Dynamic")
      setProjects(allprojects.filter((p) => p.type === "Dynamic"));
    else setProjects(allprojects);
  };
  return (
    <>
      <Header />
      <section className="portfolio-section section" id="project">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-heading="Projets">DERNIERS TRAVAUX</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter">
              <span
                className="filter-item outer-shadow"
                data-target="all"
                onClick={() => ChangeProject("All")}
              >
                Tous
              </span>
              <span
                className="filter-item outer-shadow"
                data-target="static"
                onClick={() => ChangeProject("Static")}
              >
                Statique
              </span>
              <span
                className="filter-item outer-shadow"
                data-target="dynamic"
                onClick={() => ChangeProject("Dynamic")}
              >
                Dynamique
              </span>
            </div>
          </div>
          <div className="row portfolio-items" id="projects">
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
