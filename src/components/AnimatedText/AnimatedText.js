import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

import "./AnimatedText.css";

const texts = {
  es: ["Desarrollador Full-Stack", "Diseñador UX/UI"],
  en: ["Full-Stack Developer", "UX/UI Designer"],
};

const AnimatedText = () => {
  const { language } = useContext(LanguageContext);
  const [currentText, setCurrentText] = useState(texts[language][0]);
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
          setIndex((index + 1) % texts[language].length);
          setCurrentText(texts[language][(index + 1) % texts[language].length]);
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
  }, [charIndex, isDeleting, currentText, index, language]);

  useEffect(() => {
    setCurrentText(texts[language][0]);
    setDisplayedText("");
    setIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [language]);

  return (
    <div className="animated-text">
      <span>{displayedText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default AnimatedText;
