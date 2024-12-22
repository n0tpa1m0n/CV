import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  return (
    <section>
      <h2>Project Experience</h2>
      <div className="projects-list" id="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
