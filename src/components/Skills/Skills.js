import React from "react";
import "./Skills.css";

// Importa las imágenes de los iconos
import Html5 from "../../img/html-5.png";
import Css3 from "../../img/css-3.png";
import JavaScript from "../../img/javascript.png";
import TypeScript from "../../img/typescript.png";
import ReactIcon from "../../img/react.png";
import Angular from "../../img/angular.png";
import Bootstrap from "../../img/bootstrap.png";
import Tailwind from "../../img/tailwind.png";
import Sass from "../../img/sass.png";
import Nextjs from "../../img/nextjs.png";
import Nodejs from "../../img/nodejs.png";
import Express from "../../img/express.png";
import Php from "../../img/php.png";
import Mongodb from "../../img/mongodb.png";
import Mysql from "../../img/mysql.png";
import Csharp from "../../img/c#.png";
import Java from "../../img/java.png";
import Figma from "../../img/figma.png";
import Unity from "../../img/unity.png";
import Git from "../../img/git.png";
import Kotlin from "../../img/kotlin.png";

const Skills = () => {
  return (
    <div className="skills-section" data-aos="fade-up">
      <h2>Stack Tecnológico</h2>
      <div className="skills-columns">
        <div className="skills-column" data-aos="fade-up">
          <h3>Frontend</h3>
          <div className="icon-container">
            <div className="icon-wrapper">
              <img src={Html5} alt="HTML5" className="icon" />
              <span className="icon-label">HTML5</span>
            </div>
            <div className="icon-wrapper">
              <img src={Css3} alt="CSS3" className="icon" />
              <span className="icon-label">CSS3</span>
            </div>
            <div className="icon-wrapper">
              <img src={JavaScript} alt="JavaScript" className="icon" />
              <span className="icon-label">JavaScript</span>
            </div>
            <div className="icon-wrapper">
              <img src={ReactIcon} alt="React" className="icon" />
              <span className="icon-label">React</span>
            </div>
            <div className="icon-wrapper">
              <img src={Angular} alt="Angular" className="icon" />
              <span className="icon-label">Angular</span>
            </div>
            <div className="icon-wrapper">
              <img src={TypeScript} alt="TypeScript" className="icon" />
              <span className="icon-label">TypeScript</span>
            </div>
            <div className="icon-wrapper">
              <img src={Nextjs} alt="Next.js" className="icon" />
              <span className="icon-label">Next.js</span>
            </div>
            <div className="icon-wrapper">
              <img src={Bootstrap} alt="Bootstrap" className="icon" />
              <span className="icon-label">Bootstrap</span>
            </div>
            <div className="icon-wrapper">
              <img src={Tailwind} alt="Tailwind" className="icon" />
              <span className="icon-label">Tailwind</span>
            </div>
            <div className="icon-wrapper">
              <img src={Sass} alt="Sass" className="icon" />
              <span className="icon-label">Sass</span>
            </div>
          </div>
        </div>
        <div className="skills-column" data-aos="fade-up" data-aos-delay="200">
          <h3>Backend</h3>
          <div className="icon-container">
            <div className="icon-wrapper">
              <img src={Php} alt="PHP" className="icon" />
              <span className="icon-label">PHP</span>
            </div>
            <div className="icon-wrapper">
              <img src={Nodejs} alt="Node.js" className="icon" />
              <span className="icon-label">Node.js</span>
            </div>
            <div className="icon-wrapper">
              <img src={Express} alt="Express" className="icon" />
              <span className="icon-label">Express</span>
            </div>
            <div className="icon-wrapper">
              <img src={Mongodb} alt="MongoDB" className="icon" />
              <span className="icon-label">MongoDB</span>
            </div>
            <div className="icon-wrapper">
              <img src={Mysql} alt="MySQL" className="icon" />
              <span className="icon-label">MySQL</span>
            </div>
            <div className="icon-wrapper">
              <img src={Csharp} alt="C#" className="icon" />
              <span className="icon-label">C#</span>
            </div>
            <div className="icon-wrapper">
              <img src={Java} alt="Java" className="icon" />
              <span className="icon-label">Java</span>
            </div>
          </div>
        </div>
        <div className="skills-column" data-aos="fade-up" data-aos-delay="400">
          <h3>Otros</h3>
          <div className="icon-container">
            <div className="icon-wrapper">
              <img src={Figma} alt="Figma" className="icon" />
              <span className="icon-label">Figma</span>
            </div>
            <div className="icon-wrapper">
              <img src={Unity} alt="Unity" className="icon" />
              <span className="icon-label">Unity</span>
            </div>
            <div className="icon-wrapper">
              <img src={Git} alt="Git" className="icon" />
              <span className="icon-label">Git</span>
            </div>
            <div className="icon-wrapper">
              <img src={Kotlin} alt="Kotlin" className="icon" />
              <span className="icon-label">Kotlin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
