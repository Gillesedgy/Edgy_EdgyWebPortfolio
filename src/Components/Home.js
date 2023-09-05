import React, { Component } from "react";
import "../Styles/Home.scss";
import headshot from "../assets/images/headshot.png";
import background from "../assets/images/MacBookAirframe.png";
import { TextSlider } from "./Container/TextSlider";
// prlx
import Plx from "react-plx";
function Home() {
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
                endValue: 1.5,
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
                endValue: 1.3,
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
        {/* <span className="Home__name">Hi</span>{" "} */}
        <div className="Home__image">
          <img src={headshot} alt={headshot} />
        </div>
      </Plx>
      {/* name, bio and textSlider */}

      <Plx
        className="Home__scr-info text"
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
        <div className="Home__name text">
          {" "}
          <span>Edgy </span>
          <span>Gilles</span>
        </div>{" "}
        <div className="Home__textSlider">
          <TextSlider />
        </div>
        {/* <p className="Home__bio">
          Been on a journey of continuous learning and growth. Here's a glimpse
          into my world beyond the lines of code.
        </p>{" "} */}
      </Plx>

      {/* //Todo: Change font to something more comic book, fun  */}
    </div>
  );
}

export default Home;
