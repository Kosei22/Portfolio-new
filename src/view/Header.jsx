import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
             <>
                <div class="heading">
                    <div className="name">
                        <h1><span>K</span>osei <span>T</span>akahashi</h1>
                        <a href="https://github.com/Kosei22">
                            <FontAwesomeIcon icon={faGithub} size="3x"/>
                        </a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a>HOME</a></li>
                            <li><a onClick={()=>{
                                    window.location.replace("/#carrer")
                                }}>CAREER</a></li>
                            <li><a onClick={()=>{
                window.location.replace("/#skills")
            }}>SKILLS</a></li>
                            <li><a onClick={()=>{
                window.location.replace("/#contact")
            }}>CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </>
           );
        }

export default Header;