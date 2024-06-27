import React from "react";
import "./Header.css";
import pro_pic_2 from "../../assets/pro_pic_2.png";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import Profile from "../../assets/Kavinesh_Profile.pdf"


const Header = () => {

  const openGitHubPage = () => {
    window.open('https://github.com/KavineshRamsamy05', '_blank');
  };
  
  const openLinkedInPage = () => {
    window.open('https://www.linkedin.com/in/kavinesh-ramasamy', '_blank');
  };

  const openPDF = () => {
  
    window.open(Profile);
  }

  return (
    <div id="home" className="hero">
      <div className="hero-section">
        <div className="hero-left">
          <img className="profile-pic" src={pro_pic_2} alt="" />
        </div>
        <div className="hero-right">
          <h2>
            <span>Hi I'm Kavinesh Ramasamy,</span> Frontend Developer.
          </h2>
          <p>
            Empowering businesses with responsive and intuitive web solution
            with 2+ years of Experience.
          </p>

          <div className="social-container">
          <button onClick={openGitHubPage}> <img src={github} alt="" className="logo " />GitHub</button>
          <button onClick={openLinkedInPage}> <img src={linkedIn} alt="" className="logo" />LinkedIn</button>
          <button className="hero-resume" onClick={openPDF}>Resume</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
