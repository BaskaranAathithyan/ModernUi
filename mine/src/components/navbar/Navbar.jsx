import React from 'react';
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo1.png';

const Navbar = () => {
    return (
        <div className="master__navbar">
            <div className="master__navbar-links">
                <div className="master__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="master__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#aboutus">About Us</a></p>
                    <p><a href="#gallery">Gallery</a></p>
                    <p><a href="#features">Packages</a></p>
                    <p><a href="#contact">Contact Us</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
