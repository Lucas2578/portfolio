import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import useModal from '../../utils/useModal';
import { fetchProjects, fetchWebSkills, fetchOtherSkills } from '../../utils/getDatas';
import { fr_projects_page } from '../../utils/language/translates/translations_fr';
import { en_projects_page } from '../../utils/language/translates/translations_en';

const ProjectCard = ({ language }) => {
    // Initializing three constants with empty array
    const [projects, setProjects] = useState([]);
    const [webSkills, setWebSkills] = useState([]);
    const [otherSkills, setOtherSkills] = useState([]);

    useEffect(() => {
        // Projects datas
        fetchProjects()
        .then(data => {
            setProjects(data);
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
        });
        
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

        // Calling both functions to fetch data
        fetchWebSkills();
        fetchOtherSkills();
        fetchProjects();
    }, 
    // Triggering every time the language has changed
    [language]);

    // Checking language, if "fr" charging translations fr
    const projectsTranslations = language === 'fr' ? fr_projects_page.projects : en_projects_page.projects;

    // Function to retrieve translated names using nameKey in the database
    const translateNameKey = (nameKey) => {
        let translation = projectsTranslations.nameKey[nameKey];
        return translation || nameKey;
    };

    // Base url for images
    const BASE_URL = 'http://localhost:3000'

    // Initializing functions at useModal.jsx
    const { handleMouseEnter, handleMouseLeave, isLinkHovered } = useModal();

    return (
        <div className="projects">
        {/* Mapping over these projects */}
            {projects.map((project) => (
                <div className="project__card" key={project.nameKey}>
                    <div className="project__card__header">
                        <i className="fa-solid fa-circle red project__card__header--icon"></i>
                        <i className="fa-solid fa-circle yellow project__card__header--icon"></i>
                        <i className="fa-solid fa-circle green project__card__header--icon"></i>
                    </div>
                    <div className="project__card__body">
                        <h2 className="project__card__body--title">{translateNameKey(project.nameKey)}</h2>
                        <div className="spacer"></div>
                        <div className="project__card__body__preview">
                            <img src={`${BASE_URL}/${project.imagePreviewPaths}`} alt={`preview ${project.nameKey}`} className="project__card__body__preview--img"></img>
                        </div>
                        <div className="spacer"></div>
                        <div className="project__card__body__icons">
                            <div className="project__card__body__skillsrequired">
                                {/* Mapping for every skills in skillsRequire on db */}
                                {project.skillsRequire.map((skillName) => {
                                    // Search skill in webskills, if not find, search in otherskills
                                    const skill = webSkills.find((webSkill) => webSkill.nameKey === skillName) || otherSkills.find((otherSkill) => otherSkill.nameKey === skillName);
                                    // Return a icon skill if skill is finded
                                    return skill && <i key={skill._id} className={`${skill.icon} project__card__body__skillsrequired--img`}></i>;
                                })}
                            </div>
                            {/* handleMouseEnter manages opening the modal on hover, handleMouseLeave manages closing the modal */}
                            <a href={project.githubLink} onMouseEnter={() => handleMouseEnter(project.nameKey)} onMouseLeave={handleMouseLeave}>
                                <i className="fa-brands fa-github project__card__body--img"></i>
                            </a>
                            {/* isLinkHovered displays the modal associated with this project if the mouse is hovering */}
                            <Modal project={project} modalClass="project" title={projectsTranslations.modal.clickhere} isModalOpen={isLinkHovered(project.nameKey)} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;