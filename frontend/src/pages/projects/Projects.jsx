import React from 'react';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import ProjectCard from '../../components/cards/ProjectCard';
import Footer from '../../components/footer/Footer';
import { useLanguage } from '../../utils/language/LanguageContext';

const Project = () => {
    const { language } = useLanguage();

    return (
      <div>
        <Header />
        <main className="project">
            <Starfield />
            <ProjectCard language={language}/>
        </main>
        <Footer />
      </div>
    );
  };

export default Project;