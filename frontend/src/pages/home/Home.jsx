import React from 'react';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import AppleCard from '../../components/cards/AppleCard';
import Footer from '../../components/footer/Footer';

const Home = () => {

    return (
      <div>
        <Header />
        <main className="home">
            <Starfield />
            <AppleCard />
        </main>
        <Footer />
      </div>
    );
  };

export default Home;