import React from 'react';
import { translateSubCardNameScreen, translateSubCardLegendScreen } from '../../../utils/language/SearchTraduction';
import { useLanguage } from '../../../utils/language/LanguageContext';
import { REACT_APP_BASE_URL } from '../../../utils/config';
import HeaderCard from '../HeaderCard';

const ProjectScreenCard = ({ screen, project, projectNameKey }) => {
    // Translates
    const { translations } = useLanguage();

    const imagePath = project && project.imagePaths && `${REACT_APP_BASE_URL}/${project.imagePaths[screen]}`;

    return (
      <div className="project__info__card">
        <HeaderCard />
        <div className="project__info__card__body">
          <h2 className="project__info__card__body--title">{translateSubCardNameScreen(projectNameKey, screen, translations.project_page.project)}</h2>
          <div className="spacer"></div>
          {project && project.imagePaths && (
              <div className="project__info__card__body__img">
                  {/* URL to image */}
                  <img src={imagePath} alt={translateSubCardNameScreen(projectNameKey, screen, translations.project_page.project)} className="project__info__card__body__img--img"></img>
              </div>
          )}
          <div className="spacer"></div>
          <div className="project__info__card__body__desc">
              <p>{translateSubCardLegendScreen(projectNameKey, screen, translations.project_page.project)}</p>
          </div>
        </div>
      </div>
    );
};

export default ProjectScreenCard;