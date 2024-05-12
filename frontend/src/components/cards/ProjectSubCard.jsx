import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProject } from '../../utils/getDatas';
import { translateSubCardNameScreen, translateSubCardLegendScreen } from '../../utils/language/SearchTraduction';
import { fr_project_page } from '../../utils/language/translates/translations_fr';
import { en_project_page } from '../../utils/language/translates/translations_en';
import { useLanguage } from '../../utils/language/LanguageContext';

const ProjectSubCard = ({ screen }) => {
  const { projectNameKey } = useParams();
  const [project, setProject] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    // Webskills datas
    fetchProject(projectNameKey)
    .then(data => {
        setProject(data);
    })
    .catch(error => {
        console.error('Error fetching projects:', error);
    });
}, 
[projectNameKey, language]);

    // Checking language, if "fr" charging translations fr
    const projectsTranslations = language === 'fr' ? fr_project_page.project : en_project_page.project;

      const BASE_URL = 'http://localhost:3000'

      return (
        <div className="project__info__card">
          <div className="project__info__card__header">
            <i className="fa-solid fa-circle red"></i>
            <i className="fa-solid fa-circle yellow"></i>
            <i className="fa-solid fa-circle green"></i>
          </div>
          <div className="project__info__card__body">
            <h2 className="project__info__card__body--title">{translateSubCardNameScreen(projectNameKey, screen, projectsTranslations)}</h2>
            <div className="spacer"></div>
            {project && project.imagePaths && (
              <div className="project__info__card__body__img">
                <img src={`${BASE_URL}/${project.imagePaths[screen]}`} alt={translateSubCardNameScreen(projectNameKey, screen, projectsTranslations)} className="project__info__card__body__img--img"></img>
              </div>
            )}
            <div className="spacer"></div>
            <div className="project__info__card__body__desc">
                <p>{translateSubCardLegendScreen(projectNameKey, screen, projectsTranslations)}</p>
            </div>
          </div>
        </div>
      );
};

export default ProjectSubCard;