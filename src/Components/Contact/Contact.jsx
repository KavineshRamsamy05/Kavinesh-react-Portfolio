import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2bf6da0a-8823-4f83-8c8d-91596a6cf98c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      console.log("Success", res);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="logo" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
           I'm Currently available to take new projects, so feel free to connect about anything that you want me yo work on. You can connect anytime!.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="logo"></img> <p>kavineshramasamy04@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="logo"></img> <p>+91 8690889878</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="logo"></img> <p>Chennai</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor="">Your E-mail</label>
          <input type="email" placeholder="Enter your E-mail" name="name" />
          <label htmlFor="">Write your Messege here</label>
          <textarea
            name="messege"
            rows="8"
            placeholder="Enter your messege"
          ></textarea>
          <button className="contact-submit" type="submit">
            {" "}
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
