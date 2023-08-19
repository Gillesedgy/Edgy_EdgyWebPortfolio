import React, { useState, useRef } from "react";
import "../Styles/Contact.scss";
import { FaPaperPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
//

//
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="Contact">
      <h1 className="Contact__title ">Contact</h1>
      <div className="Contact__contact-wrapper">
        {/* <!-- //!Left contact page -->  */}
        <form id="contact-form" className="Contact__form-horizontal">
          <div className="Contact__form-group">
            <div
              className="Contact__name-email
            "
            >
              <input
                type="text"
                className="Contact__form-control"
                id="name"
                placeholder="Full Name"
                name="name"
                value={name}
                onChange={onNameChange}
                required
              />
            </div>
          </div>

          <div className="Contact__form-group">
            <div
              className="Contact__name-email
            "
            >
              <input
                type="email"
                className="Contact__form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onEmailChange}
                required
              />
            </div>
          </div>

          <textarea
            className="Contact__form-control"
            rows="10"
            placeholder="Hi Edgy, I wanted to take a moment to express my ... "
            name="message"
            value={message}
            onChange={onMessageChange}
            required
          ></textarea>

          <button
            className="Contact__btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="Contact__alt-send-button">
              <i className="Contact__fa fa-paper-plane">
                {" "}
                <FaPaperPlane />
              </i>
              <span className="Contact__send-text send-icon">SEND</span>
            </div>
          </button>
        </form>

        {/* <!-- //!Right contact page -->  */}
        <div className="Contact__direct-contact-container">
          <ul className="Contact__contact-list">
            <li className="Contact__list-item">
              <i className="Contact__fa fa-map-marker fa-2x">
                <FaLocationPinLock />
              </i>{" "}
              <span className="Contact__contact-text place">
                Brookyn, New York
              </span>
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
      </div>
    </div>
  );
}

export default Contact;
