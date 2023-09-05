import { BrowserRouter as Router } from "react-router-dom";
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

  return (
    <div className="App">
      <Router>
        <section id="home">
          {" "}
          <NavBar />
          <Home />
        </section>
        <div className="empty" style={{ height: "130vw" }}></div>
        <Plx
          parallaxData={[
            {
              start: "self",
              duration: 800,
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
        {/*  */}
        <Plx
          parallaxData={[
            {
              start: "self",
              duration: 1100,
              properties: [
                {
                  startValue: 4000,
                  endValue: 0,
                  property: "translateX",
                },
              ],
            },
          ]}
        >
          {" "}
          <section id="skills">
            <Skills />
          </section>
        </Plx>
        {/*  */}
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
        </Plx>
        {/*  */}{" "}
        <section id="contact">
          <Contact />
        </section>
      </Router>
    </div>
  );
}

export default App;
