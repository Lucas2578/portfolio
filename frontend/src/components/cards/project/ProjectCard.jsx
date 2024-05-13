import React from 'react';
import Modal from '../../modal/Modal';
import useModal from '../../../utils/useModal';
import { translateProjectCardNameKey } from '../../../utils/language/SearchTraduction';
import { useLanguage } from '../../../utils/language/LanguageContext';
import { NavLink } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../../utils/config';
import HeaderCard from '../HeaderCard';

const ProjectCard = ({ projects, webSkills, otherSkills, onProjectClick, enlargedCard}) => {
    // Translates
    const { translations } = useLanguage();

    // Initializing functions at useModal.jsx
    const { handleMouseEnter, handleMouseLeave, isItemHovered } = useModal();

    const handleClick = (project) => {
        onProjectClick(project);
    }

    return (
        <div className="projects">
            <div className="project__card__list">
                {/* Mapping over these projects */}
                {projects.map((project) => {
                    const CardComponent = enlargedCard === project.nameKey ? NavLink : 'div';
                    return (
                        <CardComponent className={`project__card ${enlargedCard === project.nameKey ? 'project__card--selected' : ''}`} id={project.nameKey} key={project.nameKey} onClick={() => handleClick(project)} to={enlargedCard === project.nameKey ? `/project/${project.nameKey}` : null}>
                            <HeaderCard />
                            <div className="project__card__body">
                                <h2 className="project__card__body--title">{translateProjectCardNameKey(project.nameKey, translations.projects_page.projects)}</h2>
                                <div className="spacer"></div>
                                <div className={`${enlargedCard === project.nameKey ? 'project__card__img--selected' : ''} project__card__body__preview`}>
                                    <img src={`${REACT_APP_BASE_URL}/${project.imagePreviewPaths}`} alt={`preview ${project.nameKey}`} className="project__card__body__preview--img"></img>
                                </div>
                                <div className="spacer"></div>
                                <div className="project__card__body__icons">
                                    <div className="project__card__body__skillsrequired">
                                        {/* Mapping for every skills in skillsRequire on db */}
                                        {project.skillsRequire.map((skillName, index, category) => {
                                            // Search skill in webskills, if not found, search in otherskills
                                            const skill = webSkills.find((webSkill) => webSkill.nameKey === skillName) || otherSkills.find((otherSkill) => otherSkill.nameKey === skillName);
                                            // Obtain unique id for each skill
                                            const skillId = `skill_${project.nameKey}_${index}`;
                                            // Return a icon skill if skill is found
                                            return (
                                                skill && (
                                                    <div key={skillId} className="project__card__body__skillsrequired__icons" onMouseEnter={() => handleMouseEnter(skillId)} onMouseLeave={handleMouseLeave}>
                                                        <i className={`${skill.icon} project__card__body__skillsrequired--img`}></i>
                                                        {/* Display the modal associated with this skill if the mouse is hovering */}
                                                        <Modal project={project} modalClass="project__skills" title={translateProjectCardNameKey(skillName, translations.projects_page.projects)} isModalOpen={isItemHovered(skillId)} />
                                                    </div>
                                                )
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </CardComponent>
                    )
                })}
            </div>
        </div>
    );
};

export default ProjectCard;