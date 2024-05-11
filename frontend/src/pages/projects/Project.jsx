import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Starfield from '../../components/starfield/Starfield';
import Footer from '../../components/footer/Footer';
import { fetchProject } from '../../utils/getDatas';

const Project = () => {
  const { projectNameKey } = useParams();
  const [project, setProject] = useState([]);

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

  return (
    <div>
      <Header />
      <main className="project">
          <Starfield />
      </main>
      <h2>{projectNameKey}</h2>
      <Footer />
    </div>
  );
};

export default Project;