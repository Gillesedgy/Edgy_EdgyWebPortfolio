import React from "react";
import "../Styles/Home.scss";

function Home() {
  //Todo: Apply animation to titles
  return (
    <div className="Home">
      <div className="Home__titleA">Sotfware</div>
      <div className="Home__titleB">Engineer</div>
      <p className="Home__p">
        {" "}
        Hi there! I'm Edgy, a passionate <em>Full-stack Engineer</em> on a journey
        of continuous learning and growth. Here's a glimpse into my world beyond
        the lines of code.
      </p>
      {/* //Todo: Change p font to something more comic book, fun  */}
    </div>
  );
}

export default Home;
