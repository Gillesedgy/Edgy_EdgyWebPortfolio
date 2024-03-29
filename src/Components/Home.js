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
        <header className="Home__heder text">
          {" "}
          <h1 className="Home__name">
            Edgy <span>Gilles</span>{" "}
          </h1>
          {/* //Todo: update CSS */}
        </header>{" "}
        <div className="Home__textSlider">
          <TextSlider />
        </div>
      </Plx>
    </div>
  );
}

export default Home;
