import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import { LanguageProvider } from './utils/language/LanguageContext';
import "./styles/app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;