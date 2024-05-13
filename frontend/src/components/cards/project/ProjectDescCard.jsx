import React from 'react';
import { translateDescCardProjectTitle, translateDescCardProjectContent } from '../../../utils/language/SearchTraduction';
import { useLanguage } from '../../../utils/language/LanguageContext';
import Modal from '../../modal/Modal';
import useModal from '../../../utils/useModal';
import HeaderCard from '../HeaderCard';

const ProjectDescCard = ({ project, projectNameKey }) => {
    // Translates
    const { translations } = useLanguage();
    
    // Functions for modal
    const { handleMouseEnter, handleMouseLeave, isItemHovered } = useModal();

    return (
        <div className="project__info__card">
            <HeaderCard />
            <div className="project__info__card__body">
                <h2 className="project__info__card__body--title">{translateDescCardProjectTitle(projectNameKey, translations.project_page.project)}</h2>
                <div className="spacer"></div>
                <div className="project__info__card__body__desc">
                    <p>{translateDescCardProjectContent(projectNameKey, translations.project_page.project)}</p>
                </div>
                <div className="spacer"></div>
                <div className="project__info__card__body__icon">
                    {/* Modal on hover github icon */}
                    {project.githubLink && (
                            <>
                                <Modal project={project} modalClass="project__github" title={translations.project_page.project.modal.clickhere} isModalOpen={isItemHovered(`github_${project.nameKey}`)} />
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onMouseEnter={() => handleMouseEnter(`github_${project.nameKey}`)} onMouseLeave={handleMouseLeave}>
                                    <i className="fa-brands fa-github project__info__card__body__icon--img"></i>
                                </a>
                            </>
                        )}
                </div>
            </div>
      </div>
    );
};

export default ProjectDescCard;