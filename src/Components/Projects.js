import React from "react";

import { projectData } from "../assets/data/projectsData";
import "../Styles/Projects.scss";

function Projects() {
  const myProjects = projectData();

  return (
    <div className="Projects">
      <div className="Projects__container">
        {myProjects.map((project) => (
          <div key={project.title} className="Projects__wrapper">
            <div className="Projects__banner-image">
              {" "}
              <img src={project.image} alt={project.description} />
              <a target="_blank" rel="noreferrer" href={project.url}>
                <h2 className="Projects__title">{project.title}</h2>
                <p className="Projects__description">{project.description}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
