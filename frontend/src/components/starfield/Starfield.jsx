import React, { useEffect } from 'react';

const Starfield = () => {
    useEffect(() => {
        // Function to generate stars dynamically
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

      // Call the function to generate stars when the component mounts
      generateStars();

      // Cleanup function
      return () => {
          // Nothing to clean up in this case
      };
    }, []); // Empty dependency array to ensure the effect runs only once

    // Render stars container
    return <div className="stars"></div>;
};

export default Starfield;