import React from "react";
import Plx from "react-plx";
import { projectData } from "../assets/data/projectsData";
import "../Styles/Projects.scss";
function Projects() {
  const myProjects = projectData();

  // Todo: Import Images and update URLs / Create Cards for each project => project should display and be used within app (pop up).
  return (
    <div className="Projects">
      {" "}
      <h1>Project</h1>{" "}
      <div className="Projects__container">
        {myProjects.map((project) => (
          <div key={project.title} className="Projects__wrapper">
            <div className="Projects__banner-image">
              {" "}
              <img src={project.image} alt={project.title} />
              <a href={project.url}>
                <h1 className="Projects__title">{project.title}</h1>
              </a>
              <p>{project.description}</p>
            </div>

            <div className="Projects__button-wrapper">
              <button className="Projects__btn outline">DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
