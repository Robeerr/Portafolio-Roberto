import React from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ data, activeSlide }) => {
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
        <React.Fragment key={item.id}>
          <div
            className="slide"
            style={{
              background: item.bgColor,
              boxShadow: `0 5px 20px ${item.bgColor}30`,
              ...getStyles(i),
            }}
          >
            <SliderContent {...item} />
          </div>
          <div
            className="reflection"
            style={{
              ...getStyles(i),
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

const SliderContent = (props) => {
  const hasDemo = !!props.demo;
  const inDev = !!props.inDev;

  return (
    <div className="sliderContent">
      <img src={props.image} alt={props.title} className="project-image" />
      <h3>{props.title}</h3>
      <p className={!hasDemo ? "no-demo" : ""}>{props.desc}</p>
      <div className={`project-stack ${!hasDemo ? "no-demo" : ""}`}>
        {props.stack.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      <div className={`project-buttons ${!hasDemo ? "no-demo" : ""}`}>
        {hasDemo ? (
          <a href={props.demo} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDesktop} /> Ver Demo
          </a>
        ) : null}
        {inDev ? <span className="in-dev-badge">En Desarrollo</span> : null}
      </div>
    </div>
  );
};

export default Slider;
