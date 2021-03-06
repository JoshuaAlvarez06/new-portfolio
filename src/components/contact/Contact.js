import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <div className="contactContainer">
        <div className="contactHeading">
          <h2>CONTACT</h2>
          <p>
            Feel free to contact me for anything you may need and I'll get back
            to you ASAP.
          </p>
        </div>
        <div data-aos="zoom-in" className="contactForm">
          <form id="contactForm" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className="formSection">
              <label htmlFor="name" className="formLabel">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                required
                className="formInput"
              />
            </div>
            <div className="formSection">
              <label htmlFor="email" className="formLabel">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
                className="formInput"
              />
            </div>
            <div className="formSection">
              <label htmlFor="message" className="formLabel">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="formInput"
                placeholder="Enter message"
                required
                rows="6"
              />
            </div>
            <button className="submitBtn btn" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
