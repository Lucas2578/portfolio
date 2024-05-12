import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProject } from '../../utils/getDatas';
import { translateSubCardNameScreen, translateSubCardLegendScreen } from '../../utils/language/SearchTraduction';
import { useLanguage } from '../../utils/language/LanguageContext';
import { REACT_APP_BASE_URL } from '../../utils/config';

const ProjectSubCard = ({ screen }) => {
  const { projectNameKey } = useParams();
  const [project, setProject] = useState([]);
  // Translates
  const { translations } = useLanguage();

  useEffect(() => {
    // Project datas
    fetchProject(projectNameKey)
    .then(data => {
        setProject(data);
    })
    .catch(error => {
        console.error('Error fetching projects:', error);
    });
}, 
[projectNameKey]);

    return (
      <div className="project__info__card">
        <div className="project__info__card__header">
          <i className="fa-solid fa-circle red"></i>
          <i className="fa-solid fa-circle yellow"></i>
          <i className="fa-solid fa-circle green"></i>
        </div>
        <div className="project__info__card__body">
          <h2 className="project__info__card__body--title">{translateSubCardNameScreen(projectNameKey, screen, translations.project_page.project)}</h2>
          <div className="spacer"></div>
          {project && project.imagePaths && (
              <div className="project__info__card__body__img">
                  {/* URL to image */}
                  <img src={`${REACT_APP_BASE_URL}/${project.imagePaths[screen]}`} alt={translateSubCardNameScreen(projectNameKey, screen, translations.project_page.project)} className="project__info__card__body__img--img"></img>
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

export default ProjectSubCard;