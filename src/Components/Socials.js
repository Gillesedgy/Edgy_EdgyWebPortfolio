import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="Contact__direct-contact-container">
      <ul className="Contact__contact-list">
        <li className="Contact__list-item">
          <i className="Contact__fa fa-map-marker fa-2x">
            <FaLocationPinLock />
          </i>{" "}
          <span className="Contact__contact-text place">Brookyn, New York</span>
        </li>

        <li className="Contact__list-item">
          <i className="Contact__fa fa-phone fa-2x">
            <FaPhoneSquareAlt />{" "}
          </i>{" "}
          <span className="Contact__contact-text phone">
            {/* //todo: Change href attribute to allow users to contact me via phone number */}
            <a href="tel:1-929-555-6727" title="Give me a call">
              (929) 555-1811
            </a>
          </span>
        </li>
        <li className="Contact__list-item">
          <i className="Contact__fa fa-envelope fa-2x">
            <FaEnvelope />
          </i>{" "}
          <span className="Contact__contact-text gmail">
            {" "}
            <a href="mailto:Gillesedgy@gmail.com" title="Send me an email">
              Email me!
            </a>
          </span>
        </li>
      </ul>

      <hr />
      {/* //! Icon List */}
      <ul className="Contact__social-media-list">
        <li>
          <a
            href="https://github.com/Gillesedgy"
            target="_blank"
            rel="noreferrer"
            className="Contact__contact-icon"
          >
            <i className="Contact__fa fa-github" aria-hidden="true">
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
            <i className="Contact__fa fa-spotify" aria-hidden="true">
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
            <i className="Contact__fa fa-twitter" aria-hidden="true">
              <AiFillTwitterCircle />
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
            <i className="Contact__fa fa-instagram" aria-hidden="true">
              <FaInstagramSquare />
            </i>
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default Socials;
