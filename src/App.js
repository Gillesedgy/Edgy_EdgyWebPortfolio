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
        <div className="empty" style={{ height: "120vw" }}></div>
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
              ],
            },
          ]}
        >
          <section id="about">
            <About />
          </section>
        </Plx>
        <section id="skills">
          <h1 style={{ height: "30vw" }}>SKILLS</h1>
          <Skills />
        </section>
        <div className="empty" style={{ height: "40vw" }}></div>
        <Plx
          parallaxData={[
            {
              start: "self",
              duration: 1100,
              properties: [
                {
                  startValue: -5000,
                  endValue: 0,
                  property: "translateX",
                },
              ],
            },
          ]}
        >
          {" "}
          <section id="projects">
            <Projects />
          </section>
        </Plx>{" "}
        <div className="empty" style={{ height: "10vw" }}></div>{" "}
        <section id="contact">
          <Contact />
        </section>
      </Router>
    </div>
  );
}

export default App;
