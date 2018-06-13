import React from 'react';

const ProjectItem = ({ project, onDelete }) => (
  <li className="Project">
    <strong>{project.title}</strong>: {project.category}{' '}
    <a onClick={() => onDelete(project.id)}>X</a>
  </li>
);

export default ProjectItem;
