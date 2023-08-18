import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Projects.scss";
function Projects() {
  const navigate = useNavigate();
  const myProjects = [
    {
      title: "dotCoin",
      image: "🏞️",
      description:
        "dotCoin is a user-friendly app designed to help users track their daily expenses and income. It features customizable budget categories, real-time expense tracking, and insightful reports to visualize spending habits. Users can set budget goals and receive alerts when they're close to their limits",
      url: "https://google.com/",
    },
    {
      title: "Not-It",
      image: "🏞️",
      description:
        "Not-It is a sleek and intuitive note-taking app that allows users to organize their thoughts and ideas efficiently. Features include rich text editing, note categorization, and a powerful search function.",
      url: "https://google.com/",
    },
    {
      title: "ShopStreet",
      image: "🏞️",
      description:
        "ShopStreet is an e-commerce platform designed for small businesses...",
      url: "https://google.com/",
    },
    {
      title: "GhibliGrub",
      image: "🏞️",
      description:
        "GhibliGrub is a unique app that brings the magical animation of Studio Ghibli films to life...",
      url: "https://google.com/",
    },
  ];

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
