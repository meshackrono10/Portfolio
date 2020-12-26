import React from "react";
import "./AboutMe.css";
import { useHistory } from "react-router-dom";
import image from "./img/32.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  const history = useHistory();

  return (
    <div className="aboutme">
      <div>
        <div className="about_metitle">
          <h1>ABOUT ME</h1>
          <div className="small_line"></div>
        </div>
        <div className="aboutme_container">
          <img src={image} alt="background" />

          <h1 className="bio_teaxt">BIO</h1>

          <div className="aboutme_bio">
            <div className="aboutme_imagecontainer">
              <p>
                I am a driven front end developer with a passion for thoughtful
                UI design, collaboration and lifelong learning. Given my
                extensive experience in hospitality, I am able to effectively
                communicate with people of all backgrounds and successfully
                adapt to any situation. A fulfilling career would combine my
                tech skills and my passion for working with others and helping
                them efficiently achieve their goals. I look forward to joining
                a team that is committed to using technology to make a positive
                impact on the world. My current stack includes HTML, CSS, React
                and I have experience working with GOOGLE FIREBASE for backend .
                When I’m not coding or participating in a in sports, I enjoy
                learning new technologies, exploring cuisines of different
                cultures, and serving up a mean gravlax. <br />
                Work hard, be nice, get positive, stay hungry and have faith
                that everything will work out - The Flatiron School
              </p>
            </div>
          </div>
          <div className="aboutme_skills">
            <h1>SKILLS</h1>
            <p>This are some of my skills:</p>
            <div className="aboutmeMe_skillsHedaing">
              <h3>-React Js</h3>
              <h3>-HTML</h3>
              <h3>-CSS</h3>
              <h3>-Redux</h3>
              <h3>-Context API</h3>
              <h3>-Google firebase</h3>
              <h3>-UI design</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
