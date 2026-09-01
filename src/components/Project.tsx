import React from "react";
import "../assets/styles/Project.scss";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
}

interface LinkWrapperProps {
  link: string;
}

const LinkWrapper = ({
  link,
  children,
}: React.PropsWithChildren<LinkWrapperProps>) => {
  return link === "" || link === "#" ? (
    <div>{children}</div>
  ) : (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

const Project = ({ name, description, link, imgSrc }: ProjectProps) => {
  return (
    <div className="project">
      <LinkWrapper link={link}>
        <img src={imgSrc} className="zoom" alt="thumbnail" width="100%" />
      </LinkWrapper>
      <LinkWrapper link={link}>
        <h2>{name}</h2>
      </LinkWrapper>
      <p>{description}</p>
    </div>
  );
};

export default Project;
