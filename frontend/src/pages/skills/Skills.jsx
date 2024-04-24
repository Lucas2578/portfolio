import React from 'react';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import SkillCard from '../../components/cards/SkillCard';
import { useLanguage } from '../../utils/language/LanguageContext';

const Home = () => {
    const { language } = useLanguage();

    return (
      <div>
        <Header />
        <main className="skill">
            <Starfield />
            <SkillCard language={language} />
        </main>
      </div>
    );
  };

export default Home;