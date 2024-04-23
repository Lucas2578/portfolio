import React, { createContext, useState, useContext } from 'react';

// Créez un contexte pour la langue
const LanguageContext = createContext();

// Créez un fournisseur de contexte pour fournir la langue à toute l'application
export const LanguageProvider = ({ children }) => {
    // Définissez l'état initial de la langue sur 'fr' (français)
    const [language, setLanguage] = useState('fr');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Créez un hook personnalisé pour utiliser le contexte de langue dans vos composants
export const useLanguage = () => useContext(LanguageContext);