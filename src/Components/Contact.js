import React, { useState, useRef } from "react";
import "../Styles/Contact.scss";
import { FaPaperPlane } from "react-icons/fa";
import formImg from "../assets/images/headshot.png";
import emailjs from "@emailjs/browser";
import Socials from "./Socials";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // EmailJs Info
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Edgy Gilles",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log(result.text, "message sent");
        setName("");
        setEmail("");
        setMessage("");
        toggleFormPopUp();
      },
      (error) => {
        console.log(error.text, "Try again");
      }
    );
  };
  // pop up form
  const toggleFormPopUp = () => {
    setIsOpen(!isOpen);
  };
  // close form with key press

  return (
    <div className="Contact">
      <div id="toggle" onClick={toggleFormPopUp}>
        {isOpen ? (
          <p>x</p>
        ) : (
          <img
            className="Contact__form-open-image"
            src={formImg}
            alt="Profile"
          />
        )}
      </div>{" "}
      {isOpen && (
        <div className="Contact__form-popUp">
          <div className="close" onClick={() => setIsOpen(!isOpen)}>
            Close
          </div>
          <img
            className="Contact__form-profile-image"
            src={formImg}
            alt="Profile"
            onClick={() => setIsOpen(!isOpen)}
          />
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={onNameChange}
              required
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onEmailChange}
              required
            />

            <label htmlFor="message"></label>
            <textarea
              rows="10"
              placeholder="Hi Edgy, I wanted to take a moment to ... "
              id="message"
              name="message"
              value={message}
              onChange={onMessageChange}
              required
            ></textarea>
            <button className="send-button" id="submit" type="submit">
              <FaPaperPlane />
              <span className="Contact__send-text send-icon">SEND</span>
            </button>
          </form>
          <Socials />
        </div>
      )}
    </div>
  );
}

export default Contact;
