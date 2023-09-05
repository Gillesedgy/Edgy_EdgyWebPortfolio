import React from "react";
import "../Styles/About.scss";

function About() {
  return (
    <div className="About">
      <div className="About__passionAndInterests  section">
        <h2>Passions and Interests</h2>
        <p>
          Beyond coding, I find joy in exploring the great outdoors with my
          loyal companion, <em>Nola</em>. Whether it's hiking through scenic
          trails or simply strolling along the beach, nature rejuvenates me.
        </p>
        <p>
          I'm also an avid car enthusiast and tech geek. Building{" "}
          <em>custom PCs</em> and staying up-to-date with the latest hardware
          advancements is not just a hobby but a thrilling endeavor.
        </p>
        <p>
          Additionally, I'm an adventurous cook who loves experimenting with{" "}
          <em>new recipes </em>in the kitchen.
        </p>
      </div>

      <div className="About__philosophy section">
        <h2>Coding Philosophy</h2>
        <p>
          I believe in writing clean and maintainable code. My approach involves
          breaking down complex problems into smaller, manageable tasks, and I
          always strive for a balance between functionality and aesthetics.
          Continuous learning and keeping up with industry best practices are
          essential to me.
        </p>
      </div>
      <div className="About__freetime section">
        <h2>Outside of Coding</h2>
        <p>
          On my free time, I find immense satisfaction in helping friends and
          family solve their tech-related problems. Whether it's troubleshooting
          a computer issue or explaining a complex concept in simple terms, I
          enjoy being the go-to person for tech assistance. I'm also a proud dog
          owner, and you can often find me taking long walks with my furry
          companion in nearby parks and beaches. These walks not only provide
          relaxation but also serve as a great way to disconnect from screens
          and enjoy the beauty of nature.
        </p>
      </div>

      <div className="About__tech-enthusiast section">
        <h2>Tech Enthusiast</h2>
        <p>
          I enjoy building custom PCs as a hobby. It's not only a practical
          skill but also a fun way to stay up-to-date with hardware
          advancements. One of my proudest tech-related projects was{" "}
          <em>building a gaming PC</em> from scratch.
        </p>
        <p>
          Lastly, I frequently engage in research to keep up with the latest
          trends, emerging technologies, and industry news. It's not just a
          hobby; it's a way for me to ensure that my skills remain current and
          relevant in the fast-paced tech landscape.
        </p>
      </div>

      <div className="About__education-cert section">
        <h2>Education and Certifications</h2>
        <p>
          I hold a Bachelor's degree in Science from CUNY York College. In
          addition to my formal education, I recently completed an intensive
          coding bootcamp in June 2023. This bootcamp focused on modern web
          development technologies and practices, equipping me with the latest
          industry skills and practical experience. It was a transformative
          experience that accelerated my growth as a full-stack web developer,
          and I'm excited to apply what I've learned to real-world projects.
        </p>
      </div>
    </div>
  );
}

export default About;
