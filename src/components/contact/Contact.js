import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = () => {};

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
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <div className="formSection">
              <label htmlFor="name" className="formLabel">
                Name
              </label>
              <input type="text" className="formInput" />
            </div>
            <div className="formSection">
              <label htmlFor="email" className="formLabel">
                Email
              </label>
              <input type="text" className="formInput" />
            </div>
            <div className="formSection">
              <label htmlFor="message" className="formLabel">
                Message
              </label>
              <textarea type="text" className="formInput" rows="6" />
            </div>
            <button className="submitBtn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
