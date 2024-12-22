import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-details">
          <h3 className="project-title">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {project.title} <i className="fas fa-link"></i>
            </a>
          </h3>
          <p>{project.description}</p>
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
