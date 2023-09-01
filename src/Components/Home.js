import React from "react";
import "../Styles/Home.scss";
import { TextSlider } from "./Container/TextSlider";
function Home() {
  //Todo: Apply animation to titles
  return (
    <div className="Home">
      {/* <TextSlider/> */}
      {/* <div className="Home__titleA">Sotfware</div>
      <div className="Home__titleB">Engineer</div> */}
      <p className="Home__p">
        {" "}
        Hi there! I'm Edgy, a passionate <em><TextSlider/></em> on a journey
        of continuous learning and growth. Here's a glimpse into my world beyond
        the lines of code.
      </p>
      {/* //Todo: Change font to something more comic book, fun  */}
    </div>
  );
}

export default Home;



