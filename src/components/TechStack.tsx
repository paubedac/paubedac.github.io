import React from "react";
import { Chip } from "@mui/material";

interface TechStackProps {
  stack: string[];
}

const TechStack = ({ stack }: TechStackProps) => {
  return (
    <div className="flex-chips">
      <span className="chip-title">Tech stack:</span>
      {stack.map((label, index) => (
        <Chip key={index} className="chip" label={label} />
      ))}
    </div>
  );
};

export default TechStack;
