import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import CV_Roberto_Lopez from "../../img/CV_Roberto_Lopez.pdf";
import { LanguageContext } from "../../contexts/LanguageContext";

import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const descargarCV = (e) => {
    e.preventDefault();
    const downloadLink = CV_Roberto_Lopez;

    Swal.fire({
      title: language === "es" ? "Descargando CV" : "Downloading CV",
      text: language === "es" ? "Por favor, espera un momento" : "Please wait",
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
      setIsMenuOpen(false);
      setActiveLink(e.currentTarget.getAttribute("href"));
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentActiveLink = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom >= 80) {
        currentActiveLink = `#${section.id}`;
      }
    });

    if (currentActiveLink !== activeLink) {
      setActiveLink(currentActiveLink);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

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
              {language === "es" ? "Sobre mí" : "About me"}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={scrollToSection}
              className={activeLink === "#skills" ? "active" : ""}
            >
              {language === "es" ? "Habilidades" : "Skills"}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={scrollToSection}
              className={activeLink === "#projects" ? "active" : ""}
            >
              {language === "es" ? "Proyectos" : "Projects"}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={scrollToSection}
              className={activeLink === "#experience" ? "active" : ""}
            >
              {language === "es" ? "Experiencia" : "Experience"}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={scrollToSection}
              className={activeLink === "#contact" ? "active" : ""}
            >
              {language === "es" ? "Contacto" : "Contact"}
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
          {language === "es" ? "Descargar CV" : "Download CV"}
        </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
      </div>
    </header>
  );
};

export default Header;
