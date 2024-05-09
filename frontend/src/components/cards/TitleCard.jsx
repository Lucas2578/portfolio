import React from 'react';
import { fr_skills_page } from '../../utils/language/translates/translations_fr';
import { en_skills_page } from '../../utils/language/translates/translations_en';

const TitleCard = ({ language }) => {

    const texts = language === 'fr' ? fr_skills_page.skills_title : en_skills_page.skills_title;

    return (
        <>
            {Object.entries(texts).map(([key, value]) => (
                <div key={key} className="cardtitle">
                    <div className="cardtitle__header">
                        <i className="fa-solid fa-circle red"></i>
                        <i className="fa-solid fa-circle yellow"></i>
                        <i className="fa-solid fa-circle green"></i>
                    </div>
                    <div className="cardtitle__body">
                        <h2>{value}</h2>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TitleCard;