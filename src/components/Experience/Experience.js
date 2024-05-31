import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Experience.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const education = [
    {
      date: "Febrero, 2024",
      title:
        "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      institution: "Ilerna",
      description:
        "Estudiando el Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) en Ilerna, donde profundizo en el desarrollo de aplicaciones multiplataforma, tanto para dispositivos móviles como para web, con lenguajes como Java, Kotlin, C#, Javascript, etc...",
    },

    {
      date: "Junio, 2023",
      title: "BBK Bootcamp Diseño UX/UI",
      institution: "The Bridge - Digital Talent Acelerator",
      description:
        "Desarrollar un profundo entendimiento de las mejores prácticas de diseño de UX/UI, incluyendo investigación de usuarios, generación de personas, mapeo de viajes de usuarios, diseño de wireframes, prototipos, pruebas de usabilidad, etc..., también utilizar herramientas como Figma.",
    },
    {
      date: "Septiembre, 2022",
      title: "BBK Bootcamp Desarrollador Full-Stack",
      institution: "BBK Bootcamp - Code4Jobs",
      description:
        "Me formé intensivamente en un Bootcamp de Desarrollo Full-Stack, donde adquirí competencias en lenguajes clave (stack MERN) como HTML, CSS, React y Javascript. Profundicé en el manejo de MongoDB y en el desarrollo backend con Nestjs, Nodejs y Express.js. Esta formación me brindó una visión integral del desarrollo de software, abarcando tanto el front-end como el back-end.",
    },
    {
      date: "Septiembre, 2018",
      title: "Grado Medio en Sistemas Microinformaticos y Redes",
      institution: "Somorrostro CF",
      description:
        "Titulado en Grado Medio de Sistemas Microinformáticos y Redes, con formación en la gestión, mantenimiento e implementación de sistemas informáticos y estructuras de red.",
    },
  ];

  const work = [
    {
      date: "2023",
      title: "Desarrollador Full-Stack",
      company: "Hodeia.digital",
      description:
        "Me encargué del desarrollo y expansión de módulos innovadores para BuildApp, atendiendo y adaptando mejoras propuestas directamente por nuestros usuarios. Actué de forma proactiva en la resolución de incidencias, a la vez que perfeccioné mis habilidades en lenguajes y herramientas clave como PHP, Angular, MySql, CSS y Bootstrap entre otros.",
    },
    {
      date: "2019 - 2022",
      title: "Administrador",
      company: "Coviran S.C.A",
      description:
        "Dirigí la gestión integral de pedidos en el supermercado, desde su creación hasta la entrega, asegurando su precisión y eficiencia en cada etapa. Además, supervisé la recepción y revisión de cargas entrantes y me encargué de mantener actualizados los precios de los productos, garantizando la competitividad y exactitud en nuestro inventario.",
    },
  ];

  return (
    <div className="experience-section">
      <h2 className="section-title" data-aos="fade-up">
        Experiencia y Educación
      </h2>
      <div className="experience-columns">
        <div
          className="experience-column"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3>Educación</h3>
          {education.map((item, index) => (
            <div
              key={index}
              className={`experience-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="experience-date">{item.date}</div>
                <div className="experience-details">
                  <h4 className="ag-courses-item_title">{item.title}</h4>
                  <h5>{item.institution}</h5>
                  <p>{item.description}</p>
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
          <h3>Experiencia Laboral</h3>
          {work.map((item, index) => (
            <div
              key={index}
              className={`experience-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="experience-date">{item.date}</div>
                <div className="experience-details">
                  <h4 className="ag-courses-item_title">{item.title}</h4>
                  <h5>{item.company}</h5>
                  <p>{item.description}</p>
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
