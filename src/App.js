import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plx from "react-plx";
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

  const parallaxData = [
    {
      start: "self",
      duration: 7000,
      properties: [
        {
          startValue: 0,
          endValue: 2,
          property: "opacity",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Router>
        <NavBar />
        <section id="home">
          <Home />
        </section>
        <Plx parallaxData={parallaxData}>
          {" "}
          <section id="about">
            <About />
          </section>
        </Plx>
        <Plx parallaxData={parallaxData}>
          {" "}
          <section id="skills">
            <Skills />
          </section>
        </Plx>
        <Plx parallaxData={parallaxData}>
          {" "}
          <section id="projects">
            <Projects />
          </section>
        </Plx>
        <Plx parallaxData={parallaxData}>
          {" "}
          <section id="contact">
            <Contact />
          </section>
        </Plx>
      </Router>
    </div>
  );
}

export default App;
