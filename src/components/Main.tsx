import React from "react";
import { GitHubLink, LinkedInLink } from "./links";
import profilePic from "../assets/images/profilePic.jpg";
import "../assets/styles/Main.scss";

const Main = () => {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <GitHubLink />
            <LinkedInLink />
          </div>
          <h1>Pablo Úbeda</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <GitHubLink />
            <LinkedInLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
