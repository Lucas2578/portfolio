import React from 'react';
import { useLanguage } from '../../utils/language/LanguageContext';

function LanguageButton({ langCode, flagSrc, altText }) {
    const { language, setLanguage } = useLanguage(); // Obtenez la langue actuelle et la fonction pour la définir

    const toggleLanguage = (lang) => {
        setLanguage(lang); // Définissez la langue sur celle sélectionnée
    };

    return (
        <button className={`header__language--button ${language === langCode ? 'header__language--button-selected' : ''}`} onClick={() => toggleLanguage(langCode)}>
            <img src={flagSrc} alt={altText} className="header__language--flag"/>
        </button>
    );
}

export default LanguageButton;