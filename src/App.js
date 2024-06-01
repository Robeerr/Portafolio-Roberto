import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import AOS from "aos";
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
    <Router>
      {loading && <LoadingScreen />}
      <div className={`App ${loading ? "hidden" : "fade-in"}`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
