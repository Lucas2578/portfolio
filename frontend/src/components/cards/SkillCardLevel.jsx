import React from 'react';

const SkillCardLevel = ({ level }) => {
    const stars = [1, 2, 3, 4, 5];
  
    return (
      <div className="skillweb__card__body__level">
        {stars.map((index) => (
          <i key={index} className={`fa-solid fa-star ${index <= level ? 'skill__card__body__level--icon-full' : 'skill__card__body__level--icon-empty'}`}></i>
        ))}
      </div>
    );
  };

export default SkillCardLevel;