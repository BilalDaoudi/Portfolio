import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Project = ({ project }) => {

  const langue = useSelector((data) => data.langue);

  
  const {
    id,
    titre,
    thumb,
    images,
    description,
    Tools,
    siteweb,
    codesource,
    type,
  } = project;


  

  return (
        <div className="portfolio-item" data-category="">

          
          <div className="portfolio-item-inner outer-shadow">
            <div className="portfolio-item-img">
            <Link to={`/project/` + id}> <img src={thumb} alt="project" data-screenshots={images} /></Link>
              {/* <span className="view-project"><Link to={`/project/` + id}>Image view</Link></span> */}
            </div>
            <p className="portfolio-item-title">{titre[langue]} <br/><Link to={`/project/` + id}>détail</Link></p>
            <div className="portfolio-item-details">
              <div className="row">
                <div className="description">
                  <h3>Project Brief:</h3>
                  <p>{description[langue]}</p>
                  
                </div>
                <div className="info">
                  <h3>Project info</h3>
                  <ul>
                    <li>
                      Tools - <span>{Tools}</span>
                    </li>
                    {siteweb && (
                      <li>
                        Live view{" "}
                        <span>
                          <a target="_blank" href={siteweb}>
                            click me
                          </a>
                        </span>
                      </li>
                    )}
                    {codesource && (
                      <li>
                        Source Code{" "}
                        <span>
                          <a target="_blank" href={codesource}>
                            click me
                          </a>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Project;
