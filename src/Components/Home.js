import React, { Component } from "react";
import "../Styles/Home.scss";
import headshot from "../assets/images/headshot.png";
import background from "../assets/images/MacBookAirframe.png";
import { TextSlider } from "./Container/TextSlider";
// prlx
import Plx from "react-plx";
function Home() {
  //Todo: Apply animation to titles
  return (
    <div className="Home">
      <Plx
        className="Home__background"
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: "scale",
              },
            ],
          },
        ]}
      >
        {" "}
        <img src={background} alt="MacBookAirframe" />
      </Plx>

      {/*  */}

      <Plx
        className="Home__scr-bg"
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
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
        {" "}
        <div className="Home__image">
          <img src={headshot} alt={headshot} />
        </div>
      </Plx>
      {/* name, bio and textSlider */}

      <Plx
        className="Home__scr-info"
        parallaxData={[
          {
            start: 0,
            end: 900,
            properties: [
              {
                startValue: 2,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
      >
        {" "}
        <div className="Home__name">Edgy Gilles</div>
        <div className="Home__textSlider">
          <em>
            <TextSlider />
          </em>
        </div>
        <div className="Home__bio">
          on a journey of continuous learning and growth. Here's a glimpse into
          my world beyond the lines of code.
        </div>{" "}
      </Plx>

      {/* //Todo: Change font to something more comic book, fun  */}
    </div>
  );
}

export default Home;
