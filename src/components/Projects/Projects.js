import React, { useState, useContext } from "react";
import Slider from "../Slider/Slider";
import data from "./Data";
import { LanguageContext } from "../../contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Projects.css";
import "aos/dist/aos.css";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => {
    if (activeSlide < data.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="projects-section">
      <h2 data-aos="fade-down">
        {language === "es" ? "Mis Proyectos" : "My Projects"}
      </h2>
      <div className="carousel-container" data-aos="fade-up">
        <Slider data={data} activeSlide={activeSlide} />
        <div className="btns">
          <FontAwesomeIcon
            className="btn-left"
            onClick={prev}
            icon={faChevronLeft}
            color="#fff"
            size="2x"
          />
          <FontAwesomeIcon
            className="btn-right"
            onClick={next}
            icon={faChevronRight}
            color="#fff"
            size="2x"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
