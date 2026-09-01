import React from "react";
import { GitHubLink, LinkedInLink } from "./links";
import "../assets/styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <GitHubLink />
        <LinkedInLink />
      </div>
      <p>
        A portfolio built by{" "}
        <a
          href="https://github.com/paubedac/paubedac.github.io"
          target="_blank"
          rel="noreferrer"
        >
          Pablo Úbeda
        </a>
      </p>
    </footer>
  );
};

export default Footer;
