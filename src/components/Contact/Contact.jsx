import React from "react";
import "./Contact.css";

function Contact() {
    const submitHandler = (event) => {
        event.preventDefault();

        // Code to submit the form
    };

    return (
        <div className='contact-container'>
            <div className='contact-form'>
                <h3>Contact</h3>
                <form onSubmit={submitHandler}>
                    <div className='contact-item name'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            required
                        />
                        <br />
                    </div>
                    <div className='contact-item email'>
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            required
                        />
                        <br />
                    </div>
                    <div className='contact-item mobileno'>
                        <input
                            type='text'
                            name='mobileno'
                            placeholder='Mobile No'
                        />
                        <br />
                    </div>
                    <div className='contact-item message'>
                        <textarea
                            type='text'
                            rows='8'
                            placeholder='Message'
                            name='message'
                        />
                        <br />
                    </div>
                    <button className='button' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
