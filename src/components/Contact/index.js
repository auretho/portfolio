import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './style.scss';

const Contact = () => (
    <div className="contact">
        <div className="contact-info">
            <h2 className="contact-text">Contactez-moi!</h2>
            <a href="mailto:aurelie.thouzeau@gmail.com" className="contact-email">aurelie.thouzeau@gmail.com</a>
{/* =====================PARTIE A REVOIR PLUS TARD AVEC UNE METHODE POST===================== */}
                {/* <form id="contact-form" method="">
                    <div className="contact-input input-small required">
                        <label className="label">Nom</label>
                        <input type="text" id="name" name="name" className="input"/>
                    </div>
                    <div className="contact-input input-small required email">
                        <label className="label">E-mail</label>
                        <input type="text" id="email" name="email" className="input"/>
                    </div>
                    <div className="contact-input required">
                        <label className="label">Message</label>
                        <textarea id="message" name="message" className="input input-textarea"></textarea>
                    </div>
                    <div className="button-container">
                        <button type="submit" disabled="" className="contact-button">
                            <span className="button-text">Envoyer</span>
                        </button>
                    </div>
                </form> */}
            <div className="social">
            <a href="https://www.linkedin.com/in/athouzeau/">
                <LinkedInIcon className="social-icons" style={{ fontSize: 40 }}/> 
            </a>
            <a href="https://github.com/auretho">
                <GitHubIcon className="social-icons" style={{ fontSize: 40 }}/>
            </a>
            </div>
        </div>

    </div>
)

export default Contact;