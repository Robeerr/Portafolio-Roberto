import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";

import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import { LanguageProvider } from "./contexts/LanguageContext";

import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.refresh();
    }
  }, [loading]);

  return (
    <LanguageProvider>
      <Router>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <LanguageSwitcher />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </>
        )}
      </Router>
    </LanguageProvider>
  );
};

export default App;
