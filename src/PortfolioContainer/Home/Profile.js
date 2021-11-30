import React from 'react';
import './Profile.css';

// import Typical from 'react-typical';


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-detail'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.google.com/'>
                                <i className='fa fa-goole-plus-square'></i>
                            </a>
                            <a href='https://www.instagram.com/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.youtube.com/'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='https://www.twitter.com/'>
                                <i className='fa fa-twitter'></i>
                            </a>

                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <h2 className='highlighted-text'>Hello</h2>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h2>An Enthusactic Developer</h2>

                            {/* <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Developer 😎",
                                        1000,
                                        "Full stack Developer 💻",
                                        1000,
                                        "Mern stack Dev 📱",
                                        1000,
                                        "Cross Platform Dev 🔴",
                                        1000,
                                        "React/React Native 🌐",
                                        1000,
                                    ]}
                                />
                            </h1> */}
                        </span>
                        <span className="profile-role-tagline">
                            Highly interested in developing web based application using html, css , bootsrap , Javascript , React , MERN stack development.
                        </span>
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn"
                        // onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        > Hire Me </button>
                        <a href="developer-resume.pdf" download="Diptom-Resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    )
}
