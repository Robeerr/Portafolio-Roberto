import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Roberto</span> López
          </h1>
          <p>
            Soy un Desarrollador Full Stack y Diseñador UX/UI apasionado por
            crear experiencias web visualmente cautivadoras y fáciles de usar.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Links rápidos</h2>
          <br />
          <ul>
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contacto</h2>
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
        &copy; 2024 Roberto López | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
