import React from "react";
import ImagenRoberto from "../../img/Rober.PNG";
import AnimatedText from "../AnimatedText/AnimatedText";

import "./IntroSection.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const IntroSection = () => {
  const phoneNumber = "634410783";
  const message = "Hola, me gustaría saber más sobre tus servicios.";
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

  return (
    <div className="intro-section">
      <div className="intro">
        <h1>
          Hola, soy <span>Roberto</span>,
        </h1>
        <h2>
          <AnimatedText />
        </h2>{" "}
        <p>
          ¡Hola! Soy <b>Roberto López</b>, un{" "}
          <b>Desarrollador Full Stack y Diseñador UX/UI</b> dedicado a crear{" "}
          <b>experiencias web cautivadoras y fáciles de usar</b>. Con una{" "}
          combinación única de habilidades técnicas y creatividad, ofrezco{" "}
          <b>soluciones personalizadas</b> que elevan cada proyecto a su máximo
          potencial, asegurando <b>calidad excepcional</b> y una{" "}
          <b>experiencia de usuario inigualable</b>.
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
              Contáctame
            </a>
          </div>
          <div className="whatsapp-button-container"></div>
        </div>
      </div>
      <div className="profile-pic">
        <img src={ImagenRoberto} alt="Roberto López" />
      </div>
      <div class="scroll-down">
        <div class="scroll-icon">
          <i class="fa fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
