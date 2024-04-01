import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/SUMITPR5">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/sumit-sharma-1604a6167/">
          <CiLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/Sumit5S">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
