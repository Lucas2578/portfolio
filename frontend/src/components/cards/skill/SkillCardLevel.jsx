import React from 'react';

const SkillCardLevel = ({ level }) => {
    // Array of stars to represent skill level
    const stars = [1, 2, 3, 4, 5];
  
    return (
        <>
            {/* Map through stars array to render star icons */}
            {stars.map((index) => (
                <i key={index} className={`fa-solid fa-star ${index <= level ? 'skill__card__body__level--icon-full' : 'skill__card__body__level--icon-empty'}`}></i>
            ))}
        </>
    );
};

export default SkillCardLevel;