import React from 'react';
import { useLanguage } from '../../utils/language/LanguageContext';

const TitleCard = ({ category }) => {
    // Translates
    const { translations } = useLanguage();
    
    // Search translate for a good category
    const title = translations.skills_page.skills_title[category];

    return (
        <div className="cardtitle">
            <div className="cardtitle__header">
                <i className="fa-solid fa-circle red"></i>
                <i className="fa-solid fa-circle yellow"></i>
                <i className="fa-solid fa-circle green"></i>
            </div>
            <div className="cardtitle__body">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default TitleCard;