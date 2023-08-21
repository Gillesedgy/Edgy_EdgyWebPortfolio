import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/NavBar.scss";
/**
 * /IMOW: The nav abr should, obviously allow me to navigate to different pages of the app.
 * I also want each link to serve as an indicator to what page the user is currently on. also persist even of the page refreshes. I DO NOT WAN TO USE LOCAL STORAGE -> B/C it will save the data on the local machine and will highlight
 * One way to do this is to use some sort of Window.location or location -_o_-.. idk
 *
 * Navbar__link--active, the css class used to update if the pathname mathec the proper react location ---
 */
function NavBar() {
  const routerLocation = useLocation();
  //  is a constant that stores the location object returned by useLocation() => contains URL information
  const setActive = (pathname) => {
    return routerLocation.hash === `#${pathname}`;
  }; //* set Active checks if the pathName given as the arg is equal to the current pathName in the router location. if true=> updates assight the nav active class. else=> nada..

  useEffect(() => {
    const hash = routerLocation.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [routerLocation]);
  /**
   * TLDR => https://reactrouter.com/en/main/hooks/use-location
   * hash => part of the url that contains the #
   * UseEffect used to handle the smooth scroll side effect and only updates when the location or path name changes.
   *   - it checks if theres a hash value in the URL before running the code. if not, it returns null
   *   - if theres is an hash value assigned, it grabs it and matches it with the corresponding 'id' respectively (see components ins App.JS).
   *   -
   */
  //! TODO: Must add a function that updates the indicator on scroll as well
  return (
    // The "#" symbols is what allows the URL to properly work.. IT is what tell sit which 'id' to target.  like the name says hash to hash lol.
    <nav className="Navbar">
      <Link
        to="#home"
        className={`Navbar__link ${
          setActive("home") ? "Navbar__link--active" : ""
        }`}
      >
        <h1 className="Navbar__title">Edgy Gilles</h1>
      </Link>
      <Link
        to="#about"
        className={`Navbar__link ${
          setActive("about") ? "Navbar__link--active" : ""
        }`}
      >
        About
      </Link>
      <Link
        to="#skills"
        className={`Navbar__link ${
          setActive("skills") ? "Navbar__link--active" : ""
        }`}
      >
        Skills
      </Link>
      <Link
        to="#projects"
        className={`Navbar__link ${
          setActive("projects") ? "Navbar__link--active" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        to="#contact"
        className={`Navbar__link ${
          setActive("contact") ? "Navbar__link--active" : ""
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
