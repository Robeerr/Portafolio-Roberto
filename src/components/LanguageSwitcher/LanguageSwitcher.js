import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./LanguageSwitcher.css";
import englishFlag from "../../img/bandera-reino-unido.png";
import spanishFlag from "../../img/bandera-española.png";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      <img
        src={englishFlag}
        alt="English"
        className={`flag ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
      />
      <img
        src={spanishFlag}
        alt="Español"
        className={`flag ${language === "es" ? "active" : ""}`}
        onClick={() => setLanguage("es")}
      />
    </div>
  );
};

export default LanguageSwitcher;
