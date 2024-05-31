import React from "react";
import Swal from "sweetalert2";
import ImagenRoberto from "../../img/Rober.PNG";
import AnimatedText from "../AnimatedText/AnimatedText";
import ScrollDownGif from "../../img/ScrollDown.gif";
import CV_Roberto_Lopez from "../../img/CV_Roberto_Lopez.pdf";
import "./IntroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

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
          ¡Hola y bienvenidos a mi portafolio! Soy <b>Roberto López</b>, un
          apasionado <b>Desarrollador Full Stack y Diseñador UX/UI</b> dedicado
          a crear <b>experiencias web visualmente cautivadoras</b> y{" "}
          <b>fáciles de usar</b>. Con una <b>mezcla distintiva</b> de
          habilidades técnicas y creatividad, tengo plena <b>confianza</b> en mi
          capacidad para proporcionar <b>soluciones personalizadas</b> que
          satisfacen diversos requerimientos de proyectos. Mi objetivo es
          siempre <b>elevar</b> cada proyecto a su máximo potencial, asegurando
          una <b>calidad excepcional</b> y una{" "}
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
      <div className="scroll-down">
        <img
          src={ScrollDownGif}
          alt="Scroll Down"
          className="scroll-icon left"
        />
        <p href="#skills" onClick={scrollToSection} className="scroll-link">
          Scroll Abajo
        </p>
        <img
          src={ScrollDownGif}
          alt="Scroll Down"
          className="scroll-icon right"
        />
      </div>
    </div>
  );
};

export default IntroSection;
