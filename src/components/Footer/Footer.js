import React, { useContext, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

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

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Roberto</span> López
          </h1>
          <p>
            {language === "es"
              ? "Soy un Desarrollador Full Stack y Diseñador UX/UI apasionado por crear experiencias web visualmente cautivadoras y fáciles de usar."
              : "I am a Full Stack Developer and UX/UI Designer passionate about creating visually captivating and user-friendly web experiences."}
          </p>
        </div>
        <div className="footer-section links">
          <h2>{language === "es" ? "Links rápidos" : "Quick Links"}</h2>
          <br />
          <ul>
            <li>
              <a href="#homepage" onClick={scrollToSection}>
                {language === "es" ? "Sobre mí" : "About Me"}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={scrollToSection}>
                {language === "es" ? "Habilidades" : "Skills"}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={scrollToSection}>
                {language === "es" ? "Proyectos" : "Projects"}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={scrollToSection}>
                {language === "es" ? "Contacto" : "Contact"}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>{language === "es" ? "Contacto" : "Contact"}</h2>
          <br />
          <div className="contact-item">
            <span>
              <i className="fa-solid fa-envelope"></i> dev.rober07@gmail.com
            </span>
          </div>
          <div className="contact-item">
            <span>
              <i className="fa-solid fa-phone"></i> 634 410 783
            </span>
          </div>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/robertodevdesigner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Robeerr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Roberto López |{" "}
        {language === "es"
          ? "Todos los derechos reservados"
          : "All rights reserved"}
      </div>
    </footer>
  );
};

export default Footer;
