import React, { useState } from "react";
import { coreSkillsData } from "../assets/data/coreSkillsData";
import { softSkillsData } from "../assets/data/softSkillsData";
function Skills() {
  const getCoreSkills = coreSkillsData();
  const getSoftSkills = softSkillsData();
  const [selectedSkills, setSlectedSkills] = useState("coreSKills"); // wcore skills will be the first set of skills desiplayes on page laod

  const skillsDisplayed =
    selectedSkills === "coreSkills" ? getCoreSkills : getSoftSkills;
  // this allows me to map thru both sets of data, soft and core

  const handleSKillsChange = (category) => {
    setSlectedSkills(category);
  }; // this allows me to toggle thru both sets of data, soft and core
  //Todo: Uplaod Images and update missing information in each skill file
  return (
    <div className="Skills">
      <div className="Skills__Buttons">
        <button onClick={() => handleSKillsChange("coreSkills")}>
          Core Skills
        </button>
        <button onClick={() => handleSKillsChange("softSkills")}>
          Soft Skills
        </button>
      </div>
      {/* Card body starts here..  */}
      <div className="Skills__card_body">
        {" "}
        {skillsDisplayed.map((skill, index) => (
          // Card front face starts here...
          <div key={skill.id} className="Skills__card">
            <div className="Skills__title">
              <h1>{skill.title}</h1>
            </div>
            <img src="" alt="" />
            {/* Card Name */}
            <div className="Skills__card_name">Name:{skill.name}</div>
            {/* Card Quote*/}
            <div className="Skills__card_quote">quote:{skill.quote}</div>
            {/* Card Level */}
            <div className="Skills__card_level">Name:{skill.level}</div>
            {/* Card NUmber */}
            <div className="Skills__card_number">
              <p>Number:{skill.cardNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
