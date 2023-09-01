import React, { useState, useEffect } from "react";
import "../../Styles/TextSlider.scss";

export const TextSlider = () => {
  const toShuffle = [
    "Web Developer",
    "Software Engineer",
    "Full-stack Developer",
  ]; // Array of title that will shuffle on home page

  const [titleShow, setTitleShow] = useState(0); // responsible for managing which title will show on the screen.. starts at the first on page load
  const [currentText, setCurrentText] = useState(""); // tracks the current title section that is being displayed.

  const [isDelete, setIsDelete] = useState(false); // responsible for managing which word/title being removed.. delted animatiion
  const timer = 2000; // sets the transition period between shuffling each title
  const [typingSpeed, setTypingSpeed] = useState(300 - Math.random() * 100); // Manages typing speed animation of each letter

  // useEffect => to handle the typing animation effect

  useEffect(() => {
    let textchange = setInterval(() => {
      typing();
    }, typingSpeed);
    return () => {
      clearInterval(textchange);
    }; // the textChange => responsible for setting up the interval for the typing animation speed.
  }, [currentText]);

  // typing() => handles the typing and deleting of the titles
  const typing = () => {
    let x = titleShow % toShuffle.length;
    let fullTitle = toShuffle[x];
    // identifies the current title index
    //
    let updatedText = isDelete
      ? fullTitle.substring(0, currentText.length - 1)
      : fullTitle.substring(0, currentText.length + 1);
    // updates the current text depending on whether we are typing or deleting
    setCurrentText(updatedText); // update the state to the updadted tilte

    if (isDelete) {
      setTypingSpeed((prevTypingSpeed) => prevTypingSpeed / 2);
    } // handles typing speed during deletion by making an adjusment..

    if (!isDelete && updatedText === fullTitle) {
      setIsDelete(true);
      setTypingSpeed(timer);
    } // if the full title has been typed out, then start deleting
    else if (isDelete && updatedText === "") {
      setIsDelete(false);
      setTitleShow(titleShow + 1); // move to next title
      setTypingSpeed(500);
    } // else if => once the title is completely deleted, move to the next title and reset speed
  };
  return <div className="TextSlider">{currentText}</div>;
};
