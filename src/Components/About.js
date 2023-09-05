import React from "react";
import "../Styles/About.scss";
import Plx from "react-plx";
function About() {
  return (
    <div className="About">
      {" "}
      <Plx
        parallaxData={[
          {
            start: "self",
            startOffset: 50,
            duration: 500,
            properties: [
              {
                startValue: 0,
                endValue: 360,
                property: "rotate",
              },
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
          // {
          //   start: "self",
          //   startOffset: "100vh",
          //   duration: 500,
          //   properties: [
          //     {
          //       startValue: 1,
          //       endValue: 0,
          //       property: "opacity",
          //     },
          //   ],
          // },
        ]}
      >
        <div className="About__passionAndInterests section">
          <h2>About Me</h2>

          <p>
            I'm a full-stack web developer with a passion for technology and an
            endless curiosity for new discoveries. My journey in tech began with
            building custom PCs, which evolved into a career in software
            development. Whether it's coding or constructing hardware, I thrive
            on creating solutions that are both efficient and elegant.
          </p>
          <p>
            Beyond the digital world, I find balance by embracing the great
            outdoors. Hiking scenic trails and exploring nature with my loyal
            companion, <em>Nola</em>, keeps me grounded and inspired.
          </p>
        </div>

        <div className="About__philosophy section">
          <h2>My Coding Philosophy</h2>
          <p>
            I believe in writing clean, maintainable code. My approach involves
            breaking down complex problems into manageable tasks, always
            striving for a balance between functionality and aesthetics.
            Continuous learning and adhering to industry best practices are at
            the core of my professional growth.
          </p>
        </div>

        <div className="About__freetime section">
          <h2>Outside of Work</h2>
          <p>
            When I'm not coding, I enjoy helping friends and family with their
            tech challenges. Explaining complex concepts in simple terms and
            troubleshooting issues are ways I stay connected and grounded.
            Additionally, as a proud dog owner, you'll often find me on walks
            with my furry friend, appreciating the beauty of nature and the
            simple joys of life.
          </p>
        </div>

        <div className="About__education-cert section">
          <h2>Education and Growth</h2>
          <p>
            I hold a Bachelor's degree in Science from CUNY York College.
            Complementing my formal education, I completed an intensive coding
            bootcamp, equipping me with the latest web development skills. This
            experience was transformative, propelling me into a career where I
            continuously evolve and apply my skills in meaningful ways.
          </p>
        </div>
      </Plx>
    </div>
  );
}

export default About;
