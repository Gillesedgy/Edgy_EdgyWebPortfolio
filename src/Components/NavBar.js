import React, { useState } from "react";
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
  //  is a constant that stores the location object returned by useLocation()
  const setActive = (pathname) => {
    return routerLocation.pathname === pathname;
  };
  //* set Active checks if the pathName given as the arg is equal to the current pathName in the router location. if true=> updates assight the nav active class. else=> nada

  return (
    <nav className="Navbar">
      <Link
        to="/"
        className={`Navbar__link ${
          setActive("/") ? "Navbar__link--active" : ""
        }`}
      >
        <h1 className="Navbar__title">Edgy Gilles</h1>
      </Link>
      <Link
        to="/about"
        className={`Navbar__link ${
          setActive("/about") ? "Navbar__link--active" : ""
        }`}
      >
        About
      </Link>
      <Link
        to="/skills"
        className={`Navbar__link ${
          setActive("/skills") ? "Navbar__link--active" : ""
        }`}
      >
        Skills
      </Link>
      <Link
        to="/projects"
        className={`Navbar__link ${
          setActive("/projects") ? "Navbar__link--active" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className={`Navbar__link ${
          setActive("/contact") ? "Navbar__link--active" : ""
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
