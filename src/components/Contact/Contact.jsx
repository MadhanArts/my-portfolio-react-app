import React, { useState } from 'react';
import './Contact.css';
import { isEmpty } from 'lodash';

function Contact() {
  const [hasName, setHasName] = useState(true);
  const [hasEmail, setHasEmail] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [hasMessage, setHasMessage] = useState(true);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    mobileno: '',
    message: '',
  });

  const validateEmail = (email) => {
    if (email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)) {
      //[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,3}$
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let valid = true;

    if (isEmpty(contactForm.name)) {
      setHasName(false);
      valid = false;
    }

    if (isEmpty(contactForm.email)) {
      setHasEmail(false);
      valid = false;
    }
    if (isEmpty(contactForm.message)) {
      setHasMessage(false);
      valid = false;
    }

    if (!valid) {
      return;
    }

    alert(JSON.stringify(contactForm));
    // Code to submit the form
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h3>Contact</h3>
        <form onSubmit={submitHandler}>
          <p className="required">* required</p>
          <div className="contact-item name">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={contactForm.name}
              onChange={(event) => {
                setContactForm({
                  ...contactForm,
                  [event.target.name]: event.target.value,
                });
                if (event.target.value === '') {
                  setHasName(false);
                } else {
                  setHasName(true);
                }
              }}
            />
            <br />
            {hasName ? null : <p className="required">* Name is required</p>}
          </div>
          <div className="contact-item email">
            <input
              type="text"
              name="email"
              placeholder="Email*"
              value={contactForm.email}
              onChange={(event) => {
                setContactForm({
                  ...contactForm,
                  [event.target.name]: event.target.value,
                });

                if (event.target.value === '') {
                  setHasEmail(false);
                } else {
                  setHasEmail(true);
                  validateEmail(event.target.value);
                  // console.log(event.target.value);
                }
              }}
            />
            <br />
            {hasEmail ? (
              isEmailValid ? null : (
                <p className="required">Invalid Email</p>
              )
            ) : (
              <p className="required">* Email is required</p>
            )}
            {}
          </div>
          <div className="contact-item mobileno">
            <input
              type="text"
              name="mobileno"
              placeholder="Mobile No"
              value={contactForm.mobileno}
              onChange={(event) =>
                setContactForm({
                  ...contactForm,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <br />
          </div>
          <div className="contact-item message">
            <textarea
              type="text"
              name="message"
              rows="8"
              placeholder="Message*"
              value={contactForm.message}
              onChange={(event) => {
                setContactForm({
                  ...contactForm,
                  [event.target.name]: event.target.value,
                });
                if (event.target.value === '') {
                  setHasMessage(false);
                } else {
                  setHasMessage(true);
                }
              }}
            />
            <br />
            {hasMessage ? null : (
              <p className="required">* Message is required</p>
            )}
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
