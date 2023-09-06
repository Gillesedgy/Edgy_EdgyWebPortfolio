import React from "react";
import Plx from "react-plx";
import "./parallax.scss";
const skillsParallax = () => {
  return (
    <div className="Parallax skills">
      <Plx
        parallaxData={[
          {
            start: ".skills",
            duration: 980,
            properties: [
              {
                startValue: 300,
                endValue: 10,
                property: "skewX",
              },
              {
                startValue: 1,
                endValue: 0.5,
                property: "opacity",
              },
            ],
          },
        ]}
      >
        <h1>Skills</h1>
      </Plx>
    </div>
  );
};
export default skillsParallax;
