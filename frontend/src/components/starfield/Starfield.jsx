import React, { useEffect } from 'react';

const Starfield = () => {
      useEffect(() => {
        const generateStars = () => {
          const count = 100; // Number of stars
          const starsContainer = document.querySelector('.stars');

          for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 2 + 0.5}s`;
            starsContainer.appendChild(star);
          }
        }

        generateStars();

        return () => {
        };
      }, []);

  return <div className="stars"></div>;
};

export default Starfield;