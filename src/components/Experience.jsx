import React from "react";
import "../styles/App.scss";

const experienceData = [
  {
    jobTitle: "Website layout",
    description:
      "Creation of adaptive landing pages: developed and designed several landing pages for various clients, ensuring high loading speed and cross-browser compatibility. Technologies used: HTML, CSS (including LESS and SASS), JavaScript (jQuery), responsive design. Performance Optimization: Implemented image and code optimization to improve user experience and boost SEO.",
  },
];

const educationData = [
  {
    institution: "Belarusian State University",
    degree:
      "Mathematics and Computer Science (Web Programming and Internet Technologies)",
    duration: "Sep 2023 - Jun 2027",
  },
];

const additionalInfo = (
  <p>
    In 2021, I took layout courses at the MYFREEDOM IT school, where I received
    two diplomas confirming my skills in creating responsive and cross-browser
    websites. Later, I deepened my knowledge by taking front-end developer
    courses at the ITlogia online school. These training programs helped me
    master modern web technologies and improve the quality of my work.
  </p>
);

const Experience = () => {
  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <ul>
        {experienceData.map((job, index) => (
          <li key={index}>
            <h3 className="job-title">{job.jobTitle}</h3>
            <p className="job-description">{job.description}</p>
          </li>
        ))}
      </ul>

      <h2>Higher Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <h3 className="institution">{edu.institution}</h3>
            <h4 className="degree">{edu.degree}</h4>
            <p className="duration">{edu.duration}</p>
          </li>
        ))}
      </ul>

      <h2>Additional Education</h2>
      {additionalInfo}
    </section>
  );
};

export default Experience;
