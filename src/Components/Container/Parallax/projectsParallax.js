import React from "react";
import Plx from "react-plx";
import "./parallax.scss";

const projectsParallax = () => {
  return (
    <div className="Parallax projects">
      <Plx
        parallaxData={[
          {
            start: "self",
            startOffset: 100,
            duration: 300,
            properties: [
              {
                startValue: 5000,
                endValue: 0,
                property: "translateX",
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
        <h1>Projects</h1>
      </Plx>
    </div>
  );
};
export default projectsParallax;
