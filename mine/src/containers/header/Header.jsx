import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import camera from '../../assets/cam.png';

const Header = () => (
    
        <div className="master__header section-padding" id="home">
            <div className="master__header-content">
                <h1 className="gradient__text">DESIGNING YOUR PERFECT DAY WITH MASTER STUDIO!</h1>
                <p>We specialize in wedding photography, corporate, family and senior portraits, often traveling to your destination to capture the perfect moment in the perfect place. We will be there with you every step of the way to guarantee your special moments are captured for all time.</p>
                <div className="master__header-content__input">
                    <input type="email" placeholder="Your Email address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="master_header-content__people">
                    <img src={people} />
                    <p>we have done with 1000+ projects..</p>
                </div>

                <div className="master__header-image">
                    <img src={camera}/>
                </div>
            </div>
        </div>
    );
    

export default Header
