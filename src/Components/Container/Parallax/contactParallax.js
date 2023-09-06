import React from "react";
import Plx from "react-plx";
import "./parallax.scss";
const contactParallax = () => {
  return (
    <Plx
      parallaxData={[
        {
          start: 0,
          end: 9000,
          properties: [
            {
              startValue: 1,
              endValue: 12.3,
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
      <div className="Parallax contact">
        {" "}
        <h1 className="contact__heading">Contact</h1>
      </div>
    </Plx>
  );
};
export default contactParallax;
