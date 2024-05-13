import React from 'react';
import Starfield from '../../components/starfield/Starfield';
import AboutMeCard from '../../components/cards/home/AboutMeCard';
import calculateAge from '../../utils/calculateAge';
import Layout from '../../components/layout/Layout';

const Home = () => {
    // My birthday date for calculate my age
    const birthDate = '2002-03-25';
    const age = calculateAge(birthDate);

    return (
        <Layout>
            <main className="home">
                <Starfield />
                <AboutMeCard age={age} />
            </main>
        </Layout>
    );
  };

export default Home;