import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import { useSelector } from "react-redux";

const ProjectDetail = () => {
  let { idselect } = useParams();
  // const [show, setShow] = useState("text");
  const langue = useSelector((data) => data.langue);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  var filtre_tab = useSelector((data) =>
    data.projects.find((p) => p.id === parseInt(idselect))
  );
  const project_erreur = {
    id: "0",
    titre: "erreur",
    thumb: "/img/logo.jpg",
    images: ["/img/logo.jpg"],
    description: "erreur",
    Tools: "Aucun",
    siteweb: "",
    codesource: "",
    type: "",
  };

  // const handleToggle = () => {
  // setShow((prevShow) => (prevShow === "text" ? "photo" : "text"));
  // };
  const project = filtre_tab.length == 0 ? project_erreur : filtre_tab;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />

      <div className="project-detail">
        <div className="header-container">
          <h2> {project.titre[langue]}</h2>
        </div>

        <div className="image-container">
          <div className="img">
          <img
            src={project.images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
          />
          </div>
          <div className="controls">
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
          </div>

          <p>
            <span className="tools">Tools :</span> {project.Tools}
          </p>
          {project.siteweb !== "" ? (
            <p className="website">
              Website: <a href={project.siteweb}>click me</a>{" "}
            </p>
          ) : <p></p>}
           {project.codesource !== "" ? (
            <p className="source-code">
            Source Code: <a href={project.codesource}>click me</a>{" "}
          </p>
          ) : <p></p>}
          
        </div>
        <div className="text-content">
          <p className="description">
            <span className="tools">Description :</span> {project.description[langue]}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
