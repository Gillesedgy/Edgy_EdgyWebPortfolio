import React from "react";
import Plx from "react-plx";
import "./parallax.scss";
const aboutParallax = () => {
  return (
    <div className="Parallax about">
      <Plx
        parallaxData={[
          {
            start: "self",
            startOffset: 50,
            duration: 1000,
            properties: [
              {
                startValue: 0,
                endValue: 360,
                property: "rotate",
              },
              {
                startValue: 1,
                endValue: 3,
                property: "scale",
              },
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
      >
        <h1 className="Parallax__heading">About</h1>
      </Plx>
      <div className="Parallax__bio">
        <Plx
          parallaxData={[
            {
              start: ".Parallax__bio",
              startOffset: 50,
              duration: 1000,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity",
                },
              ],
            },
          ]}
        >
          <p>
            Been on a journey of continuous learning and growth. Here's a
            glimpse into my world beyond the lines of code.
          </p>
        </Plx>
      </div>
    </div>
  );
};

export default aboutParallax;
