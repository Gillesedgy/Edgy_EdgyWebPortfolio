import React from "react";
import { projectData } from "../assets/data/projectsData";
import "../Styles/Projects.scss";
function Projects() {
  const myProjects = projectData();

  // Todo: Import Images and update URLs / Create Cards for each project => project should display and be used within app (pop up).
  return (
    <div className="Projects">
      {myProjects.map((project) => (
        <div key={project.title} className="Projects__card">
          <a href={project.url}>
            <h1 className="Projects__title">{project.title}</h1>
          </a>
          <img src={project.image} alt={project.title} />
          <div className="Projects__card_bg">{project.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
