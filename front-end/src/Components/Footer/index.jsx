import React from "react";
import "./index.css";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

function footer() {
  return (
    <footer>
      <h2>
        <em>"Sempre pensando em seu bem estar."</em>
      </h2>
      <div className="footer-icon-container">
        <a href="https://github.com/BRun0442" target="blank">
          <FaGithub size="2em" className="footer-icon-item" />
        </a>
        <a href="">
          <FaInstagram size="2em" className="footer-icon-item" />
        </a>
        <a href="">
          <FaYoutube size="2em" className="footer-icon-item" />
        </a>
        <a href="">
          <FaLinkedin size="2em" className="footer-icon-item" />
        </a>
      </div>
    </footer>
  );
}

export default footer;
