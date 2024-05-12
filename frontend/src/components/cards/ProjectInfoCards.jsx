import React from 'react';
import ProjectSubCard from './ProjectSubCard';
import ProjectDescCard from './ProjectDescCard';

const ProjectInfoCards = () => {

  return (
    <>
      <div className="project__info__desc">
        <ProjectDescCard />
      </div>
      <div className="project__info__list">
        {/* Screen is the name of screen required in db */}
          <ProjectSubCard screen="screen1" />
          <ProjectSubCard screen="screen2" />
          <ProjectSubCard screen="screen3" />
      </div>
    </>
  );
};

export default ProjectInfoCards;