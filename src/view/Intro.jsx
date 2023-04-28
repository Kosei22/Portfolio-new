import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faJs, faCss3Alt, faHtml5} from '@fortawesome/free-brands-svg-icons';

function Intro(){
    return(
        <>
            <div className="intro">
                <div className="icons">
                    <FontAwesomeIcon icon={faHtml5} size="5x" color="#FF6D28" className="i"/>
                    <FontAwesomeIcon icon={faCss3Alt} size="5x" color="#2192FF" className="i"/>
                    <FontAwesomeIcon icon={faJs} size="5x" color="#FFFF00" className="i"/>
                    <FontAwesomeIcon icon={faReact} size="5x" color="#3A98B9" className="i"/>
                </div>
                <div className="name">
                    <h2>Kosei Takahashi</h2>
                    <h2>Frontend Web Engineer</h2>
                    <p></p>
                </div>
            </div>
        </>
    );
}

export default Intro;