import React, { useState, useRef } from "react";
import "../Styles/Contact.scss";
import { FaPaperPlane } from "react-icons/fa";
import formImg from "../assets/images/headshot.png";
import emailjs from "@emailjs/browser";

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

  return (
    <div className="Contact">
      <div className="Contact__pop" onClick={toggleFormPopUp}>
        Let's Connet{" "}
      </div>{" "}
      <div className="Contact__contact-wrapper">
        {isOpen && (
          <div className="formPopUp">
            <img className="Contact__form-image" src={formImg} alt="Profile" />
            <form
              id="contact-form"
              className="Contact__form-horizontal"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name"></label>
              <input
                type="text"
                className="Contact__form-input"
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
                className="Contact__form-input"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onEmailChange}
                required
              />

              <label htmlFor="message"></label>
              <textarea
                className="Contact__form-input "
                rows="10"
                placeholder="Hi Edgy, I wanted to take a moment to express my ... "
                id="message"
                name="message"
                value={message}
                onChange={onMessageChange}
                required
              ></textarea>
              <button
                className="Contact__btn btn-primary send-button"
                id="submit"
                type="submit"
                // value={handleSubmit}
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
