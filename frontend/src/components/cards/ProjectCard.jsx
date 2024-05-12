import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import useModal from '../../utils/useModal';
import { translateProjectCardNameKey } from '../../utils/language/SearchTraduction';
import { fetchProjects, fetchWebSkills, fetchOtherSkills } from '../../utils/getDatas';
import { useLanguage } from '../../utils/language/LanguageContext';
import { NavLink } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../utils/config';

const ProjectCard = () => {
    // Initializing three constants with empty array
    const [projects, setProjects] = useState([]);
    const [webSkills, setWebSkills] = useState([]);
    const [otherSkills, setOtherSkills] = useState([]);
    const [enlargedCard, setEnlargedCard] = useState(null);
    // Translates
    const { translations } = useLanguage();

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
    []);

    // Initializing functions at useModal.jsx
    const { handleMouseEnter, handleMouseLeave, isItemHovered } = useModal();

    const handleClick = async (project) => {
        setEnlargedCard(enlargedCard === project.nameKey ? null : project.nameKey);
        if (enlargedCard !== project.nameKey) {
            // If card is not on first position, set it
            await setProjects([project, ...projects.filter(p => p.nameKey !== project.nameKey)]);
        }
        // Moving user to good project with anchor
        document.getElementById(project.nameKey).scrollIntoView();
    };

    return (
        <div className="projects">
            <div className="project__card__list">
                {/* Mapping over these projects */}
                {projects.map((project) => {
                    const CardComponent = enlargedCard === project.nameKey ? NavLink : 'div';
                    return (
                        <CardComponent className={`project__card ${enlargedCard === project.nameKey ? 'project__card--selected' : ''}`} id={project.nameKey} key={project.nameKey} onClick={() => handleClick(project)} to={enlargedCard === project.nameKey ? `/project/${project.nameKey}` : null}>
                            <div className="project__card__header">
                                <i className="fa-solid fa-circle red project__card__header--icon"></i>
                                <i className="fa-solid fa-circle yellow project__card__header--icon"></i>
                                <i className="fa-solid fa-circle green project__card__header--icon"></i>
                            </div>
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