import React from "react";
import "@fortawesome/free-regular-svg-icons";
import Skill from "./Skill";
import { expertiseData } from "../data/expertise";
import "../assets/styles/Expertise.scss";

const Expertise = () => {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {expertiseData.map((skill) => (
            <Skill
              key={skill.key}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              techStack={skill.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
