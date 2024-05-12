import React, { createContext, useState, useEffect, useContext } from 'react';
import frTranslations from './translates/translations_fr';
import enTranslations from './translates/translations_en';

// Associated each language with the correct translate file
const translationsMap = {
  fr: frTranslations,
  en: enTranslations,
};

// Creates a context for language and translations
const LanguageContext = createContext();

// Give language and translations to all components via context
export const LanguageProvider = ({ children }) => {
    // Local state to store the selected language (defaults to 'fr')
    const [language, setLanguage] = useState('fr');
    // Local state to store translations for the selected language
    const [translations, setTranslations] = useState(translationsMap[language]);

    // Update translate whenever a new language is selected
    useEffect(() => {
        setTranslations(translationsMap[language]);
    }, [language]);

    // Give the LanguageContext.Provider with language and translates values
    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the context language and translates context in components
export const useLanguage = () => useContext(LanguageContext);