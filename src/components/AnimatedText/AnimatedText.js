import React, { useState, useEffect } from "react";
import "./AnimatedText.css";

const texts = ["Desarrollador Full-Stack", "Diseñador UX/UI"];

const AnimatedText = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
          setCurrentText(texts[(index + 1) % texts.length]);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingDelay = isDeleting ? 50 : 150;
    const timeout = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentText, index]);

  return (
    <div className="animated-text">
      <span>{displayedText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default AnimatedText;
