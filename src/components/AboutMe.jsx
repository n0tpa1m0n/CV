import React from "react";
import profile from "../assets/images/profile.jpg";

const AboutMe = () => {
  return (
    <section>
      <h2 className="name">Elizaveta Gorda</h2>
      <h3 className="speciality">Frontend-developer</h3>
      <hr />
      <div className="container__about">
        <div className="container__about_img">
          <div className="neon-border"></div>
          <img className="profile" src={profile} alt="Profile" />
        </div>

        <div className="container__about_info">
          <p>
            Hello! My name is Elizaveta 🙋 <br />
            <br />I am a Frontend Developer with a strong enthusiasm for
            creating visually appealing and functional websites. I thrive on
            learning new technologies and techniques, constantly seeking to
            enhance my skills and stay updated with industry trends. My
            dedication to delivering high-quality user experiences drives my
            work, as I aim to combine aesthetics with functionality in every
            project.
          </p>
          <button className="download_button">
            <a href="/elizavetagorda.pdf" download>
              Download PDF
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
