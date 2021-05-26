import React from "react";
import "./Home.css";
import logo from "../mylogo.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGooglePlusG,
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <div className='home'>
            <div className='short-introduction item col1'>
                <div className='short-introduction-content'>
                    <h3 className='wish'>Hi There!! </h3>
                    <h1 className='intro uppercase'> I am Madhan M</h1>
                    <h2 className='description uppercase'>a programmer</h2>
                    <div className='social-media-links'>
                        <a href='#github'>
                            <FontAwesomeIcon
                                className='icon github'
                                icon={faGithub}
                                aria-hidden='true'
                            />
                        </a>
                        <a href='#linkedin'>
                            <FontAwesomeIcon
                                className='icon linkedin'
                                icon={faLinkedinIn}
                                aria-hidden='true'
                            />
                        </a>
                        <a href='#gmail'>
                            <FontAwesomeIcon
                                className='icon gmail'
                                icon={faGooglePlusG}
                                aria-hidden='true'
                            />
                        </a>
                        <a href='#instagram'>
                            <FontAwesomeIcon
                                className='icon instagram'
                                icon={faInstagram}
                                aria-hidden='true'
                            />
                        </a>
                    </div>
                    <a className='button see-resume' href='#resume'>
                        <span>See Resume</span>
                    </a>
                </div>
            </div>

            <div className='profile-image item col2'>
                <img src={logo} alt='my pic' />
            </div>
        </div>
    );
}

export default Home;
