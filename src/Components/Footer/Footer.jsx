import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">

        <div className="footer-bottom-right">
          <a className="footer-subscribe" href="#home">
            Back to top
          </a>
         
        </div>

          <h2>Kavinesh</h2>
          <p>
            {" "}
            Empowering businesses with responsive and intuitive web solution
            with 2+ years of Experience.
          </p>
        </div>
       
      
      </div>

      <hr />
     
      <div className="footer-bottom">
        <div className="social-container">
          <button>
            {" "}
            <img src={github} alt="" className="logo" />
            GitHub
          </button>
          <button>
            {" "}
            <img src={linkedIn} alt="" className="logo" />
            LinkedIn
          </button>
          <button className="hero-resume">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
