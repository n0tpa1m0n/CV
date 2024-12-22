import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import BackgroundContent from "./components/BackgroundContent";
import projectsData from "./data/projectsData";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <Header />
        <AboutMe />
        <div className="content">
          <Sidebar />
          <Projects projects={projectsData} />
        </div>{" "}
        <Experience />
      </div>
      <BackgroundContent />
    </div>
  );
};

export default App;
