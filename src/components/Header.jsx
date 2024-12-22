import React from "react";
import github_logo from "../assets/images/github_logo.png";
const Header = () => {
  return (
    <header>
      <div className="navbar">
        <a href="#projects "> Projects</a>
        <a href="#contact"> Contacts</a>
        <div className="source">
          <a href="https://github.com/n0tpa1m0n">Source</a>
          <img className="github_logo" src={github_logo} alt="Логотип" />
        </div>
      </div>
    </header>
  );
};

export default Header;
