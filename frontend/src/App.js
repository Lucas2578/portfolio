import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import { LanguageProvider } from './utils/language/LanguageContext';
import "./styles/app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;