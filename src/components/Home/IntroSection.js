import React from "react";
import Swal from "sweetalert2";
import ImagenRoberto from "../../img/Rober.PNG";
import AnimatedText from "../AnimatedText/AnimatedText";
import CV_Roberto_Lopez from "../../img/CV_Roberto_Lopez.pdf";
import "./IntroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-free/css/all.min.css";

const IntroSection = () => {
  const phoneNumber = "634410783";
  const message = "Hola, me gustaría saber más sobre tus servicios.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  const descargarCV = (e) => {
    e.preventDefault();
    const downloadLink = CV_Roberto_Lopez;

    Swal.fire({
      title: "Descarga en curso...",
      text: "El CV está siendo descargado.",
      icon: "info",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      const tempLink = document.createElement("a");
      tempLink.href = downloadLink;
      tempLink.setAttribute("download", "CV_Roberto_Lopez.pdf");
      tempLink.style.display = "none";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    });
  };

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
            <a
              href={CV_Roberto_Lopez}
              className="btn resume"
              onClick={descargarCV}
            >
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                className="download-icon"
              />
              Descargar CV
            </a>
            <a
              href="#contact"
              className="btn contact"
              onClick={scrollToSection}
            >
              Contáctame
            </a>
          </div>
          <div className="whatsapp-button-container">
            <a href={whatsappUrl} className="btn_ whatsapp">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          </div>
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
