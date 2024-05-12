import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProject } from '../../utils/getDatas';
import { translateDescCardProjectTitle, translateDescCardProjectContent } from '../../utils/language/SearchTraduction';
import { fr_project_page } from '../../utils/language/translates/translations_fr';
import { en_project_page } from '../../utils/language/translates/translations_en';
import { useLanguage } from '../../utils/language/LanguageContext';
import Modal from '../modal/Modal';
import useModal from '../../utils/useModal';

const ProjectDescCard = () => {
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
  [projectNameKey]);

    // Checking language, if "fr" charging translations fr
    const projectsTranslations = language === 'fr' ? fr_project_page.project : en_project_page.project;
    
    const { handleMouseEnter, handleMouseLeave, isItemHovered } = useModal();

      return (
        <div className="project__info__card">
          <div className="project__info__card__header">
            <i className="fa-solid fa-circle red"></i>
            <i className="fa-solid fa-circle yellow"></i>
            <i className="fa-solid fa-circle green"></i>
          </div>
          <div className="project__info__card__body">
            <h2 className="project__info__card__body--title">{translateDescCardProjectTitle(projectNameKey, projectsTranslations)}</h2>
            <div className="spacer"></div>
            <div className="project__info__card__body__desc">
                <p>{translateDescCardProjectContent(projectNameKey, projectsTranslations)}</p>
            </div>
            <div className="spacer"></div>
            <div className="project__info__card__body__icon">
            <Modal project={project} modalClass="project__github" title={projectsTranslations.modal.clickhere} isModalOpen={isItemHovered(`github_${project.nameKey}`)} />
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onMouseEnter={() => handleMouseEnter(`github_${project.nameKey}`)} onMouseLeave={handleMouseLeave}>
                    <i className="fa-brands fa-github project__info__card__body__icon--img"></i>
                </a>
            </div>
          </div>
        </div>
      );
};

export default ProjectDescCard;