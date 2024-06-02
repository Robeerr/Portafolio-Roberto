import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import AOS from "aos";
import { education, work } from "./DataExperience";

import "aos/dist/aos.css";
import "./Experience.css";

const Experience = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [expandedEducation, setExpandedEducation] = useState({});
  const [expandedWork, setExpandedWork] = useState({});

  const toggleEducation = (index) => {
    setExpandedEducation({
      ...expandedEducation,
      [index]: !expandedEducation[index],
    });
  };

  const toggleWork = (index) => {
    setExpandedWork({
      ...expandedWork,
      [index]: !expandedWork[index],
    });
  };

  return (
    <div className="experience-section">
      <h2 className="section-title" data-aos="fade-up">
        {language === "es"
          ? "Experiencia y Educación"
          : "Experience and Education"}
      </h2>
      <div className="experience-columns">
        <div
          className="experience-column"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3>{language === "es" ? "Educación" : "Education"}</h3>
          {education.map((item, index) => (
            <div
              key={index}
              className={`experience-item ${
                index % 2 === 0 ? "left" : "right"
              } ${expandedEducation[index] ? "expanded" : "collapsed"}`}
            >
              <a
                className="ag-courses-item_link"
                onClick={() => toggleEducation(index)}
              >
                <div className="ag-courses-item_bg">
                  <i className="fas fa-eye"></i>
                </div>
                <div className="experience-date">{item.date[language]}</div>
                <div className="experience-details">
                  <h4 className="ag-courses-item_title">
                    {item.title[language]}
                  </h4>
                  <h5>{item.institution[language]}</h5>
                  {expandedEducation[index] && (
                    <>
                      <p>{item.description[language]}</p>
                    </>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
        <div
          className="experience-column"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h3>
            {language === "es" ? "Experiencia Laboral" : "Work Experience"}
          </h3>
          {work.map((item, index) => (
            <div
              key={index}
              className={`experience-item ${
                index % 2 === 0 ? "left" : "right"
              } ${expandedWork[index] ? "expanded" : "collapsed"}`}
            >
              <a
                className="ag-courses-item_link"
                onClick={() => toggleWork(index)}
              >
                <div className="ag-courses-item_bg">
                  <i className="fas fa-eye"></i>
                </div>
                <div className="experience-date">{item.date[language]}</div>
                <div className="experience-details">
                  <h4 className="ag-courses-item_title">
                    {item.title[language]}
                  </h4>
                  <h5>{item.company[language]}</h5>
                  {expandedWork[index] && (
                    <>
                      <p>{item.description[language]}</p>
                    </>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
