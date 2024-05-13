import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Starfield from '../../components/starfield/Starfield';
import ProjectDescCard from '../../components/cards/project/ProjectDescCard';
import ProjectScreenCard from '../../components/cards/project/ProjectScreenCard';
import { fetchProject } from '../../utils/getDatas';
import Layout from '../../components/layout/Layout';

const Project = () => {
    const { projectNameKey } = useParams();
    const [project, setProject] = useState({});

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
        <Layout>
            <main className="project__info">
                <Starfield />
                <div className="project__info__desc">
                    <ProjectDescCard project={project} projectNameKey={projectNameKey}/>
                  </div>
                  <div className="project__info__list">
                      {/* Screen is the name of screen required in db */}
                      <ProjectScreenCard screen="screen1" project={project} projectNameKey={projectNameKey} />
                      <ProjectScreenCard screen="screen2" project={project} projectNameKey={projectNameKey} />
                      <ProjectScreenCard screen="screen3" project={project} projectNameKey={projectNameKey} />
                  </div>
            </main>
        </Layout>
    );
};

export default Project;