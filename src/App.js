import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  // Navbar,
  Home,
  About,
  Skills,
  Projects,
  Contact,
} from "./Components/Container/components";
import NavBar from "./Components/NavBar";
function App() {
  //Todo: hide navbar or  something.. not sure yet.. looks good for now
  return (
    <div className="App">
      <Router>
        <NavBar />
        <section id="home">
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
