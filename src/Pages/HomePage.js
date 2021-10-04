import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Ezhilarasi T</span>
                </h1>
                <p className="h-sub-text">
                    I am MERN stack developer with 3 Years of experience. Have an very good skill set with react JS. Worked with more than 7 MERN  stack projects as programmer Analyst with developing an optimised Application for our client .
                </p>
            </header>
        </div>
    )
}

export default HomePage;
