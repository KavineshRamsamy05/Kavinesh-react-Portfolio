import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-right">
          <div className="about-para">
            <p>
            &nbsp;&nbsp; Welcome to my corner of the web! I'm Kavinesh, a passionate frontend developer dedicated to crafting immersive digital experiences.
            With a keen eye for design and a love for clean, efficient code, I specialize in turning ideas into intuitive, user-friendly interfaces.
            </p>
            <p>
            Whether it's building responsive websites, optimizing user interfaces, or collaborating with creative teams, I thrive on the opportunity to bring ideas to life in the digital realm.
            I believe in the power of technology to connect people, streamline processes, and elevate brands, and I'm committed to making that vision a reality through my work.
            </p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p> <hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavaScript</p> <hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p> <hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>GIT</p> <hr style={{width:"50%"}}/>
                </div>
                
            </div>
          
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
            <h1>2+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>10+</h1>
            <p>Projects Completed</p>
        </div>
      </div>

    </div>
  );
};

export default About;
