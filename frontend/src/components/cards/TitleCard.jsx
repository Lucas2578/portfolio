import React from 'react';
import appleCard_skill from '../../utils/language/appleCard_skill';

const TitleCard = ({ language }) => {
    const texts = language === 'fr' ? appleCard_skill.fr : appleCard_skill.en;

    return (
        <>
            {Object.keys(texts.titles).map((key) => (
                <div key={key} className="cardtitle">
                    <div className="cardtitle__header">
                        <i className="fa-solid fa-circle red"></i>
                        <i className="fa-solid fa-circle yellow"></i>
                        <i className="fa-solid fa-circle green"></i>
                    </div>
                    <div className="cardtitle__body">
                        <h2>{texts.titles[key]}</h2>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TitleCard;