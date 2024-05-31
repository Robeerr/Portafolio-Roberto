import React, { useState } from "react";
import "./Projects.css";
import "aos/dist/aos.css";
import Slider from "../Slider/Slider";
import data from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
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
      <h2 data-aos="fade-down">Mis Proyectos</h2>
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
