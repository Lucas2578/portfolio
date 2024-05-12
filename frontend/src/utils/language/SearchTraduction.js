// Translate the name key of a skill card based on its type
export const translateSkillCardNameKey = (nameKey, type, skillsTranslations) => {
    // Attempt to find translation in the skillsTranslations object
    let translation = skillsTranslations[type][nameKey];

    return translation || nameKey;
};

// Translate the name key of a project card
export const translateProjectCardNameKey = (nameKey, projectsTranslations) => {
    // Attempt to find translation in the projectsTranslations object
    let translation = projectsTranslations.nameKey[nameKey];

    // If translation not found, attempt to find it in the skillsRequire object
    if (!translation) {
        const { skillsRequire } = projectsTranslations;
        translation = skillsRequire[nameKey];
    }

    return translation || nameKey;
};

// Translate the title of a project card's description
export const translateDescCardProjectTitle = (nameKey, projectsTranslations) => {
    // Attempt to find translation in the projectsTranslations object
    let translation = projectsTranslations[nameKey].desc.title;

    return translation || nameKey;
};

// Translate the content of a project card's description
export const translateDescCardProjectContent = (nameKey, projectsTranslations) => {
    // Attempt to find translation in the projectsTranslations object
    let translation = projectsTranslations[nameKey].desc.content;

    return translation || nameKey;
};

// Translate the name of a screen in a project sub card
export const translateSubCardNameScreen = (nameKey, screen, projectsTranslations) => {
    // Attempt to find translation in the projectsTranslations object
    let translation = projectsTranslations[nameKey].title[screen];

    return translation || nameKey;
};

// Translate the legend of a screen in a project sub card
export const translateSubCardLegendScreen = (nameKey, screen, projectsTranslations) => {
    // Attempt to find translation in the projectsTranslations object
    let translation = projectsTranslations[nameKey].legend[screen];

    return translation || nameKey;
};