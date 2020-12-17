import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './style.scss';

const Contact = () => (
    <div className="contact">
        <div className="contact-info">
                <form id="contact-form" method="">
                    <div className="contact-input input-small required">
                        <label className="label">Name</label>
                        <input type="text" id="name" name="name" className="input"/>
                    </div>
                    <div className="contact-input input-small required email">
                        <label className="label">E-mail</label>
                        <input type="text" id="email" name="email" className="input"/>
                    </div>
                    <div className="contact-input required">
                        <label className="label">Message</label>
                        <textarea id="message" name="message" className="input"></textarea>
                    </div>
                    <div className="button-container">
                        <button type="submit" disabled="" className="contact-button">
                            <span className="button-text">Send Message</span>
                        </button>
                    </div>
                </form>
        </div>
        <div className="social">
        <Link to="https://github.com/auretho">
            <LinkedInIcon className="social-icons" style={{ fontSize: 40 }}/> 
        </Link>
        <Link to="https://www.linkedin.com/in/athouzeau/">
            <GitHubIcon className="social-icons" style={{ fontSize: 40 }}/>
        </Link>
        </div>
    </div>
)

export default Contact;