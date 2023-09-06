import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import {
  Home,
  About,
  Skills,
  Projects,
  Contact,
  // Parallax
  AboutParallax,
  SkillsParallax,
  ProjectsParallax,
  ContactParallax,
} from "./Components/Container/components";

function App() {
  return (
    <div className="App">
      <Router>
        <section id="home">
          <NavBar />
          <Home />
        </section>

        <AboutParallax />
        <section id="about">
          <About />
        </section>
        <SkillsParallax />
        <section id="skills">
          <Skills />
        </section>
        <ProjectsParallax />
        <section id="projects">
          <Projects />
        </section>
        <ContactParallax />
        <section id="contact">
          <Contact />
        </section>
      </Router>
    </div>
  );
}

export default App;
