import React, { useState } from "react";
import Swal from "sweetalert2";
import CV_Roberto_Lopez from "../../img/CV_Roberto_Lopez.pdf";

import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      setIsMenuOpen(false); // Close the menu after clicking a link
      setActiveLink(e.currentTarget.getAttribute("href"));
    }
  };

  return (
    <header className="header">
      <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#homepage"
              onClick={scrollToSection}
              className={activeLink === "#homepage" ? "active" : ""}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={scrollToSection}
              className={activeLink === "#skills" ? "active" : ""}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={scrollToSection}
              className={activeLink === "#projects" ? "active" : ""}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={scrollToSection}
              className={activeLink === "#experience" ? "active" : ""}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={scrollToSection}
              className={activeLink === "#contact" ? "active" : ""}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__resume">
        <a
          href={CV_Roberto_Lopez}
          className="resume-button"
          onClick={descargarCV}
        >
          <i className="fa-solid fa-cloud-arrow-down fa-lg download-icon"></i>
          Descargar CV
        </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
      </div>
    </header>
  );
};

export default Header;
