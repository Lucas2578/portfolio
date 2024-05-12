import React, { useState, useEffect } from 'react';
import SkillCardLevel from './SkillCardLevel';
import TitleCard from './TitleCard';
import { fetchWebSkills, fetchOtherSkills } from '../../utils/getDatas';
import { translateSkillCardNameKey } from '../../utils/language/SearchTraduction';
import { fr_skills_page } from '../../utils/language/translates/translations_fr';
import { en_skills_page } from '../../utils/language/translates/translations_en';

const SkillCard = ({ language }) => {
    // Initializing two constants with empty array
    const [webSkills, setWebSkills] = useState([]);
    const [otherSkills, setOtherSkills] = useState([]);

    useEffect(() => {
        // Webskills datas
        fetchWebSkills()
        .then(data => {
            setWebSkills(data);
        })
        .catch(error => {
            console.error('Error fetching webskills:', error);
        });
        
        // Otherskills datas
        fetchOtherSkills()
        .then(data => {
            setOtherSkills(data);
        })
        .catch(error => {
            console.error('Error fetching otherskills:', error);
        });
    }, 
    // Triggering every time the language has changed
    [language]);

    // Checking language, if "fr" charging translations fr
    const skillsTranslations = language === 'fr' ? fr_skills_page.skills : en_skills_page.skills;
    const levelNames = language === 'fr' ? fr_skills_page.skills.level_name : en_skills_page.skills.level_name;

    // Initializing an array with different skills categories
    const groupedSkills = [
        { category: 'web', skills: webSkills },
        { category: 'other', skills: otherSkills }
    ];

    return (
        <div className="skills">
            {/* Mapping over these categories */}
            {groupedSkills.map(({ category, skills }) => (
                <div className={`skill${category}`} key={category}>
                    <TitleCard language={language} category={category} />
                    <div className="skill__card__list">
                        {/* Mapping for each present skill */}
                        {skills.map(skill => (
                            <div key={skill._id} className="skill__card">
                                <div className="skill__card__header">
                                    <i className="fa-solid fa-circle red skill__card__header--icon"></i>
                                    <i className="fa-solid fa-circle yellow skill__card__header--icon"></i>
                                    <i className="fa-solid fa-circle green skill__card__header--icon"></i>
                                </div>
                                <div className="skill__card__body">
                                    <i className={`${skill.icon} skill__card__body--icon`}></i>
                                    <div className="spacer"></div>
                                    {/* Calling the function to find the skill's name */}
                                    <h2 className="skill__card__body--title">{translateSkillCardNameKey(skill.nameKey, category, skillsTranslations)}</h2>
                                    <div className="skill__card__body__level">
                                        <SkillCardLevel level={skill.level} />
                                        <p className="skill__card__body__level--name">{levelNames[skill.level]}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillCard;