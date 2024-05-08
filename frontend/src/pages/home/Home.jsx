import React from 'react';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import AppleCard from '../../components/cards/AppleCard';
import { useLanguage } from '../../utils/language/LanguageContext';
import Footer from '../../components/footer/Footer';

const Home = () => {
    const { language } = useLanguage();

    return (
      <div>
        <Header />
        <main className="home">
            <Starfield />
            <AppleCard language={language} />
        </main>
        <Footer />
      </div>
    );
  };

export default Home;