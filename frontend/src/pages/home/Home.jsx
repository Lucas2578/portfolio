import React from 'react';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import AppleCard from '../../components/applecard/AppleCard';
import { useLanguage } from '../../utils/language/LanguageContext';

const Home = () => {
    const { language } = useLanguage();

    return (
      <div>
        <Header />
        <main className="home">  
            <div className="stars">
            </div>
            <Starfield />
            <AppleCard language={language} />
        </main>
      </div>
    );
  };

export default Home;