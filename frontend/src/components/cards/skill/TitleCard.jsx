import React from 'react';
import { useLanguage } from '../../../utils/language/LanguageContext';
import HeaderCard from '../HeaderCard';

const TitleCard = ({ category }) => {
    // Translates
    const { translations } = useLanguage();
    
    // Search translate for a good category
    const title = translations.skills_page.skills_title[category];

    return (
        <div className="cardtitle">
            <HeaderCard />
            <div className="cardtitle__body">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default TitleCard;