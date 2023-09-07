import { BrowserRouter as Router } from "react-router-dom";
import Plx from "react-plx";
import {
  Home,
  About,
  Skills,
  Projects,
  Contact,
} from "./Components/Container/components";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <Router>
        <section id="home">
          {" "}
          <NavBar />
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </Router>
    </div>
  );
}

export default App;
