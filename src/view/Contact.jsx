import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


function Contact(){
    return(
        <>
            <div className="contact" id="contact">
                <h3>Contact</h3>
                <ul className="contact-info">
                    <li>
                        <FontAwesomeIcon icon={faEnvelope}　/>    
                        <p><a href="mailto: kosei.t422@gmail.com">kosei.t422@gmail.com</a></p> 
                    </li>
                    <li>
                       <FontAwesomeIcon icon={faPhone}　/> 
                       <p>(604)679-5175</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} size="xl"/> 
                        <p><a href="https://github.com/Kosei22">
                                https://github.com/Kosei22</a>
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Contact;