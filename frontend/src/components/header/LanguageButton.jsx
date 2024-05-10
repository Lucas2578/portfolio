import React from 'react';
import { useLanguage } from '../../utils/language/LanguageContext';

function LanguageButton({ langCode, flagSrc, altText }) {
    // We retrieve the current language and the function to update it
    const { language, setLanguage } = useLanguage();

    // We update the language
    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <button className={`header__language--button ${language === langCode ? 'header__language--button-selected' : ''}`} onClick={() => toggleLanguage(langCode)}>
            <img src={flagSrc} alt={altText} className="header__language--flag"/>
        </button>
    );
}

export default LanguageButton;