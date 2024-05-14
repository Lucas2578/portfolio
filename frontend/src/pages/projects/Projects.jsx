import React, { useState, useEffect } from 'react';
import Starfield from '../../components/starfield/Starfield';
import { fetchProjects, fetchWebSkills, fetchOtherSkills } from '../../utils/getDatas';
import ProjectCard from '../../components/cards/project/ProjectCard';
import Layout from '../../components/layout/Layout';

const Project = () => {
    // Initializing three constants with empty array
    const [projects, setProjects] = useState([]);
    const [webSkills, setWebSkills] = useState([]);
    const [otherSkills, setOtherSkills] = useState([]);
    const [enlargedCard, setEnlargedCard] = useState(null);

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
    }, 
    []);

    // Function for enlarged card on click and place THIS card on first position and moving user to THIS project
    const handleClick = async (project, event) => {
        setEnlargedCard(enlargedCard === project.nameKey ? null : project.nameKey);
        if (enlargedCard !== project.nameKey) {
            // If card is not on first position, set it
            await setProjects([project, ...projects.filter(p => p.nameKey !== project.nameKey)]);
        }
        // Moving user to good project with anchor
        document.getElementById(project.nameKey).scrollIntoView();
    };

    return (
        <Layout>
            <main className="project">
                <Starfield />
                <ProjectCard projects={projects} webSkills={webSkills} otherSkills={otherSkills} onProjectClick={handleClick} enlargedCard={enlargedCard} />
            </main>
        </Layout>
    );
  };

export default Project;