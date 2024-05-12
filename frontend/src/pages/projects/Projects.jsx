import React from 'react';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import ProjectCard from '../../components/cards/ProjectCard';
import Footer from '../../components/footer/Footer';

const Project = () => {

    return (
      <div>
        <Header />
        <main className="project">
            <Starfield />
            <ProjectCard/>
        </main>
        <Footer />
      </div>
    );
  };

export default Project;