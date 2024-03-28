import React, { useState } from "react";
import "../Styles/Skills.scss";
//
import { coreSkillsData } from "../assets/data/coreSkillsData";
import { softSkillsData } from "../assets/data/softSkillsData";
//SLIDER
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; // Default styling
import "slick-carousel/slick/slick-theme.css"; // Default theme
//
function Skills() {
  const getCoreSkills = coreSkillsData();
  const getSoftSkills = softSkillsData();
  const [selectedSkills, setSelectedSkills] = useState("getCoreSkills"); // core skills will be the first set of skills desplayed on page laod
  const skillsDisplayed =
    selectedSkills === "getCoreSkills" ? getCoreSkills : getSoftSkills; // this allows me to map thru both sets of data, soft and core

  const handleSKillsChange = (category) => {
    setSelectedSkills(category);
  }; // this allows me to toggle thru both sets of data, soft and core
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="SkillsContainer">
      <div className="Skills__Buttons buttons">
        <button onClick={() => handleSKillsChange("getCoreSkills")}>
          Core Skills
        </button>

        <button onClick={() => handleSKillsChange("getSoftSkills")}>
          Soft Skills
        </button>
      </div>

      <div className="Skills">
        {/* Card body starts here..  */}
        <Slider {...settings} className="Skills">
          {skillsDisplayed.map((skills) => (
            <div key={skills.title}>
              <div className="Skills__card-container">
                <div className="Skills__card-background">
                  <div className="Skills__card-frame">
                    <div className="Skills__card-frame-header">
                      <h1 className="Skills__card-name">{skills.name}</h1>
                      {/* <!-- Place Tech Stack Here --> */}
                      {/* <div id="card-stack-mana">
                        <ul>
                        {skills.stack.map((item, index) => (
                          <li key={index}>{item.icon}</li>
                          ))}
                          </ul>
                        </div> */}
                    </div>{" "}
                    {/* <!--Skills image--> */}
                    <img
                      className="Skills__card-image"
                      src={skills.image}
                      alt={skills.description}
                      loading="lazy"
                    />
                    <div className="Skills__card-frame-type">
                      <h1 className="Skills__card-type   ">
                        {skills.title}
                        {/* <span id="card-set-icon">{skills.icon}</span> */}
                      </h1>
                    </div>
                    <div className="Skills__card-frame-text-box">
                      <p className="Skills__card-description ftb-inner-margin">
                        {skills.description}
                      </p>

                      <p className="Skills__card-quote-text">
                        <b>&apos;{skills.quote}&apos;</b>
                      </p>
                    </div>
                    <div className="Skills__card-frame-bottom-info inner-margin">
                      <div className="Skills__card-fbi-left">
                        {/* DOB-(released day) and Card # */}
                        <p>#{skills.cardNumber}</p> <p>629.93</p>
                      </div>
                      <div className="Skills__card-fbi-center">
                        {" "}
                        <p>{skills.level}</p>
                      </div>{" "}
                      <div className="Skills__card-fbi-right">
                        <p> &#x99; &#169; EG, 2023 Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Skills;
