import React from 'react';
import SkillCardLevel from './SkillCardLevel';
import TitleCard from './TitleCard';
import { translateSkillCardNameKey } from '../../../utils/language/SearchTraduction';
import { useLanguage } from '../../../utils/language/LanguageContext';
import HeaderCard from '../HeaderCard';

const SkillCard = ({webSkills, otherSkills}) => {
    // Translates
    const { translations } = useLanguage();

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
                    <TitleCard category={category} />
                    <div className="skill__card__list">
                        {/* Mapping for each present skill */}
                        {skills.map(skill => (
                            <div key={skill._id} className="skill__card">
                                <HeaderCard />
                                <div className="skill__card__body">
                                    <i className={`${skill.icon} skill__card__body--icon`}></i>
                                    <div className="spacer"></div>
                                    {/* Calling the function to find the skill's name */}
                                    <h2 className="skill__card__body--title">{translateSkillCardNameKey(skill.nameKey, category, translations.skills_page.skills)}</h2>
                                    <div className="skill__card__body__level">
                                        <SkillCardLevel level={skill.level} />
                                        <p className="skill__card__body__level--name">{translations.skills_page.skills.level_name[skill.level]}</p>
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