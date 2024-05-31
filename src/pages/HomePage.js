import React from "react";
import IntroSection from "../components/Home/IntroSection";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import WaveSeparator from "../components/WaveSeparator/WaveSeparator";
import WaveSeparatorWhite from "../components/WaveSeparatorWhite/WaveSeparatorWhite";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <div id="homepage">
        <IntroSection />
      </div>
      <WaveSeparatorWhite />
      <div id="skills">
        <Skills />
      </div>
      <WaveSeparator />
      <div id="projects">
        <Projects />
      </div>
      <WaveSeparatorWhite />
      <div id="experience">
        <Experience />
      </div>
      <WaveSeparator />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
