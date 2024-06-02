import Stylas from "../../img/Stylas3.png";
import Hipica from "../../img/Hipica2.PNG";
import Workospaces from "../../img/worköSpaces3.png";
import CityPulse from "../../img/CityPulse3.png";
import Aquality from "../../img/Aquality 2.PNG";

const projects = [
  {
    id: 1,
    bgColor: "#FFFFFF",
    title: {
      es: "Stylas Ecommerce",
      en: "Stylas Ecommerce",
    },
    desc: {
      es: "Stylas esta creada para aficionados a la moda TESLA, permitiéndoles explorar colecciones, añadir productos al carrito y descubrir detalles exquisitos de cada prenda.",
      en: "Stylas is created for TESLA fashion enthusiasts, allowing them to explore collections, add products to the cart, and discover exquisite details of each garment.",
    },
    stack: ["Next.js", "CSS", "JavaScript"],
    image: Stylas,
    demo: "https://stylas-shop.vercel.app/",
    inDev: false,
  },
  {
    id: 2,
    bgColor: "#FFFFFF",
    title: {
      es: "Hipica App",
      en: "Hipica App",
    },
    desc: {
      es: "Esta aplicación es para amantes de la hípica, ofreciendo servicios como mozos y alquiler de cuadras, con detalles y reservas fáciles para el cuidado y entrenamiento de sus caballos.",
      en: "This app is for equestrian enthusiasts, offering services such as grooms and stable rentals, with easy details and reservations for the care and training of their horses.",
    },
    stack: ["React", "CSS", "JavaScript"],
    image: Hipica,
    demo: "https://hipica-martin.vercel.app/",
    inDev: true,
  },
  {
    id: 3,
    bgColor: "#FFFFFF",
    title: {
      es: "WorköSpaces",
      en: "WorköSpaces",
    },
    desc: {
      es: "Con Worköholics, diseñé y desarrollé el frontend de 'WorköSpaces', una app para gestionar espacios de trabajo y reservar salas con un mapa interactivo.",
      en: "With Worköholics, I designed and developed the frontend of 'WorköSpaces', an app to manage workspaces and book rooms with an interactive map.",
    },
    stack: ["React", "MongoDB", "Express", "Nodejs"],
    image: Workospaces,
    inDev: false,
  },
  {
    id: 4,
    bgColor: "#FFFFFF",
    title: {
      es: "CityPulse",
      en: "CityPulse",
    },
    desc: {
      es: "'CityPulse', una app intuitiva para turistas y residentes en Bilbao. Interfaz atractiva que permite crear itinerarios personalizados según los intereses de los usuarios.",
      en: "'CityPulse', an intuitive app for tourists and residents in Bilbao. Attractive interface that allows creating personalized itineraries according to users' interests.",
    },
    stack: ["Figma", "Research", "Prototyping"],
    image: CityPulse,
    inDev: false,
  },
  {
    id: 5,
    bgColor: "#FFFFFF",
    title: {
      es: "Aquality",
      en: "Aquality",
    },
    desc: {
      es: "Diseñamos la interfaz de 'Aquality', una app para mejorar la experiencia en las costas de Bilbao, proporcionando información clara y atractiva sobre la calidad del agua.",
      en: "We designed the interface of 'Aquality', an app to improve the experience on the coasts of Bilbao, providing clear and attractive information about water quality.",
    },
    stack: ["Figma", "Prototyping", "User Testing"],
    image: Aquality,
    inDev: false,
  },
];

export default projects;
