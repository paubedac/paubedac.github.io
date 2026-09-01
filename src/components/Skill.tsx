import React from "react";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechStack from "./TechStack";

interface SkillProps {
  title: string;
  description: string;
  techStack: string[];
  icon: IconDefinition;
}

const Skill = ({ title, description, techStack, icon }: SkillProps) => {
  return (
    <div className="skill">
      <FontAwesomeIcon icon={icon} size="3x" />
      <h3>{title}</h3>
      <p>{description}</p>
      <TechStack stack={techStack} />
    </div>
  );
};

export default Skill;
