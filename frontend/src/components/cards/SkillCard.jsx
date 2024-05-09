import React, { useState, useEffect } from 'react';
import SkillCardLevel from './SkillCardLevel';
import { fr_skills_page } from '../../utils/language/translates/translations_fr';
import { en_skills_page } from '../../utils/language/translates/translations_en';

const SkillCard = ({ language }) => {
    const [webSkills, setWebSkills] = useState([]);
    const [otherSkills, setOtherSkills] = useState([]);

    useEffect(() => {
      const fetchWebSkills = () => {
        fetch(`http://localhost:4000/api/skillwebs`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Erreur lors de la récupération des compétences');
            }
            return response.json();
          })
          .then(data => setWebSkills(data))
          .catch(error => {
            console.error(error);
          });
      };
    
    const fetchOtherSkills = () => {
        fetch(`http://localhost:4000/api/skillothers`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Erreur lors de la récupération des compétences');
            }
            return response.json();
          })
          .then(data => setOtherSkills(data))
          .catch(error => {
            console.error(error);
          });
      };

      fetchWebSkills();
      fetchOtherSkills();
    }, [language]);

    const skillsTranslations = language === 'fr' ? fr_skills_page.skills : en_skills_page.skills;
    const levelNames = language === 'fr' ? fr_skills_page.skills.level_name : en_skills_page.skills.level_name;

    const translateNameKey = (nameKey) => {
      let translation = skillsTranslations.web[nameKey] || skillsTranslations.other[nameKey];
      return translation || nameKey;
    };

    return (
      <div className="skills">
        <div className="skillweb">
          {webSkills.map(skill => (
            <div key={skill._id} className="skill__card">
              <div className="skill__card__header">
                <i className="fa-solid fa-circle red skill__card__header--icon"></i>
                <i className="fa-solid fa-circle yellow skill__card__header--icon"></i>
                <i className="fa-solid fa-circle green skill__card__header--icon"></i>
              </div>
              <div className="skill__card__body">
                <i className={`${skill.icon} skill__card__body--icon`}></i>
                <div className="spacer"></div>
                <h2 className="skill__card__body--title">{translateNameKey(skill.nameKey, 'web')}</h2>
                <div className="skill__card__body__level">
                  <SkillCardLevel level={skill.level} />
                  <p className="skill__card__body__level--name">{levelNames[skill.level]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="skillother">
          {otherSkills.map(skill => (
            <div key={skill._id} className="skill__card">
              <div className="skill__card__header">
                <i className="fa-solid fa-circle red skill__card__header--icon"></i>
                <i className="fa-solid fa-circle yellow skill__card__header--icon"></i>
                <i className="fa-solid fa-circle green skill__card__header--icon"></i>
              </div>
              <div className="skill__card__body">
                <i className={`${skill.icon} skill__card__body--icon`}></i>
                <div className="spacer"></div>
                <h2 className="skill__card__body--title">{translateNameKey(skill.nameKey, 'other')}</h2>
                <div className="skill__card__body__level">
                  <SkillCardLevel level={skill.level} />
                  <p className="skill__card__body__level--name">{levelNames[skill.level]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default SkillCard;