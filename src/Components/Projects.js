import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // this is default slider css
import "slick-carousel/slick/slick-theme.css"; // Default theme

import { projectData } from "../assets/data/projectsData";
import "../Styles/Projects.scss";

function Projects() {
  const myProjects = projectData();

  // Settings for the slider
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="Projects">
      <div className="Projects__container">
        <Slider {...settings}>
          {myProjects.map((project) => (
            <div key={project.title} className="Projects__wrapper">
              <div className="Projects__banner-image">
                <img src={project.image} alt={project.description} />
                <a target="_blank" rel="noreferrer" href={project.url}>
                  <h2 className="Projects__title">{project.title}</h2>
                  <p className="Projects__description">{project.description}</p>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
