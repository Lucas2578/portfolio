import React from 'react';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import Footer from '../../components/footer/Footer';
import ProjectInfoCards from '../../components/cards/ProjectInfoCards';

const Project = ({ language }) => {

  return (
    <div>
      <Header />
      <main className="project__info">
          <Starfield />
          <ProjectInfoCards />
      </main>
      <Footer />
    </div>
  );
};

export default Project;