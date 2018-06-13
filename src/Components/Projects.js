import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = ({ projects, onDelete }) => {
  const projectItems = projects
    ? projects.map(project => (
        <ProjectItem
          onDelete={() => onDelete(project.id)}
          key={project.title}
          project={project}
        />
      ))
    : '';
  return (
    <div className="Projects">
      <h3>Lastest Projects</h3>
      {projectItems}
    </div>
  );
};
export default Projects;
