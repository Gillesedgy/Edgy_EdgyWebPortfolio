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
            duration: 990,
            properties: [
              {
                startValue: -500,
                endValue: 0,
                property: "translateY"
              },
              {
                startValue: 1,
                endValue: 0.5,
                property: "opacity",
              },
              {
                startValue: 0,
                endValue: 3,
                property: "scale",
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
