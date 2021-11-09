import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById('contactForm');
    let formData = new FormData(myForm);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  };

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
          <form
            id="contactForm"
            name="contact"
            netlify
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="formSection">
              <label htmlFor="name" className="formLabel">
                Name
              </label>
              <input type="text" name="name" className="formInput" />
            </div>
            <div className="formSection">
              <label htmlFor="email" className="formLabel">
                Email
              </label>
              <input type="email" name="email" className="formInput" />
            </div>
            <div className="formSection">
              <label htmlFor="message" className="formLabel">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="formInput"
                rows="6"
              />
            </div>
            <button className="submitBtn" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
