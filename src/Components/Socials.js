import React from "react";
import "../Styles/Socials.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="Socials">
      <ul className="Socials__media-list">
        <li>
          <a
            href="https://github.com/Gillesedgy"
            target="_blank"
            rel="noreferrer"
            className="Contact__contact-icon"
          >
            <i className="icon Socials__github" aria-hidden="true">
              <FaGithub />
            </i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/edgy-gilles-421967148/"
            target="_blank"
            rel="noreferrer"
            className="Contact__contact-icon"
          >
            <i className="icon Socials__spotify" aria-hidden="true">
              <FaLinkedin />
            </i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/GillesEdgy"
            target="_blank"
            rel="noreferrer"
            className="Contact__contact-icon"
          >
            <i className="icon Socials__twitter" aria-hidden="true">
              <AiFillTwitterCircle />
            </i>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/obvious_sir"
            target="_blank"
            rel="noreferrer"
            className="Contact__contact-icon"
          >
            <i className="icon Socials__instagram" aria-hidden="true">
              <FaInstagramSquare />
            </i>
          </a>
        </li>
      </ul>
      <div className="Socials__location">
        <FaLocationPinLock />{" "}
        <span className="Socials__location-text place">New York</span>
        <div />
        <br />
      </div>
    </div>
  );
};
export default Socials;
