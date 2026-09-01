import React from "react";

import Project from "./Project";
import { projectsData } from "../data/projects";
import "../assets/styles/Project.scss";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((item) => (
          <Project
            key={item.key}
            name={item.name}
            description={item.description}
            link={item.link}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
