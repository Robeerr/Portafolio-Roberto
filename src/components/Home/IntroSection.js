import React, { useContext, useEffect, useState } from "react";
import ImagenRoberto from "../../img/Rober.PNG";
import AnimatedText from "../AnimatedText/AnimatedText";
import { LanguageContext } from "../../contexts/LanguageContext";

import "./IntroSection.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const IntroSection = () => {
  const { language } = useContext(LanguageContext);
  const phoneNumber = "634410783";
  const message =
    language === "es"
      ? "Hola, me gustaría saber más sobre tus servicios."
      : "Hello, I would like to know more about your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  const scrollToSection = (e) => {
    e.preventDefault();
    const section = document.querySelector(
      e.currentTarget.getAttribute("href")
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [elementsLoaded, setElementsLoaded] = useState(false);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setElementsLoaded(true);
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <div className="intro-section">
      <div className={`intro ${elementsLoaded ? "loaded" : ""}`}>
        <h1>
          {language === "es" ? "Hola, soy " : "Hello, I am "}
          <span>Roberto</span>,
        </h1>
        <h2>
          <AnimatedText />
        </h2>
        <p>
          {language === "es" ? (
            <>
              ¡Hola! Soy <b>Roberto López</b>,{" "}
              <b>Desarrollador Full Stack y Diseñador UX/UI</b> dedicado a crear{" "}
              <b>experiencias web cautivadoras y fáciles de usar</b>. Con una{" "}
              combinación única de habilidades técnicas y creatividad, ofrezco{" "}
              <b>soluciones personalizadas</b> que elevan cada proyecto a su
              máximo potencial, asegurando <b>calidad excepcional</b> y una{" "}
              <b>experiencia de usuario inigualable</b>.
            </>
          ) : (
            <>
              Hello! I am <b>Roberto López</b>, a{" "}
              <b>Full Stack Developer and UX/UI Designer</b> dedicated to
              creating <b>captivating and user-friendly web experiences</b>.
              With a unique combination of technical skills and creativity, I
              offer <b>customized solutions</b> that elevate every project to
              its highest potential, ensuring <b>exceptional quality</b> and an{" "}
              <b>unmatched user experience</b>.
            </>
          )}
        </p>
        <div className="buttons-container">
          <div className="buttons">
            <a href={whatsappUrl} className="btn_ whatsapp">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
            <a
              href="#contact"
              className="btn contact"
              onClick={scrollToSection}
            >
              {language === "es" ? "Contáctame" : "Contact Me"}
            </a>
          </div>
          <div className="whatsapp-button-container"></div>
        </div>
      </div>
      <div className={`profile-pic ${elementsLoaded ? "loaded" : ""}`}>
        <img src={ImagenRoberto} alt="Roberto López" />
      </div>
      <div className={`scroll-down ${elementsLoaded ? "loaded" : ""}`}>
        <div className="scroll-icon">
          <i className="fa fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
