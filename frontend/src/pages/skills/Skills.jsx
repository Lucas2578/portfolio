import React from 'react';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import SkillCard from '../../components/cards/SkillCard';
import Footer from '../../components/footer/Footer';

const Skill = () => {

    return (
      <div>
        <Header />
        <main className="skill">
            <Starfield />
            <SkillCard />
        </main>
        <Footer />
      </div>
    );
  };

export default Skill;