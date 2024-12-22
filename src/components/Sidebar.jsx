import React from "react";
import "../styles/App.scss";

const skills = [
  "React",
  "JavaScript",
  "HTML/CSS/SASS/LESS",
  "Redux",
  "TailwindCSS",
  "Node.js",
  "JQuery",
  "Git",
];
const languages = ["English - B2  ", "Belarusian - native", "Russian - native"];
const contacts = [
  "email@example.com",
  "+1 (234) 567-8901",
  "linkedin.com/in/yourprofile",
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Languages</h2>
        <ul className="languages-list">
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Contact Info</h2>
        <ul class="contacts-list" id="contact">
          <li>
            <a href="https://t.me/n0tpa1m0n" target="_blank">
              Telegram
            </a>
          </li>
          <li>
            <a href="https://github.com/n0tpa1m0n" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/ElizavetaGorda" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
