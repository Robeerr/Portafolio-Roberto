import React, { useContext } from "react";
import "./Slider.css";
import { LanguageContext } from "../../contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ data, activeSlide }) => {
  const { language } = useContext(LanguageContext);

  const getStyles = (index) => {
    if (activeSlide === index) {
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    } else if (activeSlide - 1 === index) {
      return {
        opacity: 1,
        transform: "translateX(-300px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    } else if (activeSlide + 1 === index) {
      return {
        opacity: 1,
        transform: "translateX(300px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    } else if (activeSlide - 2 === index) {
      return {
        opacity: 0,
        transform: "translateX(-600px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    } else if (activeSlide + 2 === index) {
      return {
        opacity: 0,
        transform: "translateX(600px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    } else if (index < activeSlide - 2) {
      return {
        opacity: 0,
        transform: "translateX(-600px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    } else if (index > activeSlide + 2) {
      return {
        opacity: 0,
        transform: "translateX(600px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
    }
  };

  return (
    <div className="slideC">
      {data.map((item, i) => (
        <div
          key={item.id}
          className="slide"
          style={{
            background: item.bgColor,
            boxShadow: `0 5px 20px ${item.bgColor}30`,
            ...getStyles(i),
          }}
        >
          <div className="sliderContent">
            <img
              src={item.image}
              alt={item.title[language]}
              className="project-image"
            />
            <h3>{item.title[language]}</h3>
            <p>{item.desc[language]}</p>
            <div className="project-stack">
              {item.stack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <FontAwesomeIcon icon={faDesktop} />{" "}
                  {language === "es" ? "Ver Demo" : "View Demo"}
                </a>
              )}
              {item.inDev && (
                <span className="in-dev-badge">
                  {language === "es" ? "En Desarrollo" : "In Development"}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
