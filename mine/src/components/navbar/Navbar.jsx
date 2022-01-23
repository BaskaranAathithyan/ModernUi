import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo1.png';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="master__navbar">
            <div className="master__navbar-links">
                <div className="master__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="master__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#aboutus">About Us</a></p>
                    <p><a href="#gallery">Gallery</a></p>
                    <p><a href="#features">Packages</a></p>
                    <p><a href="#contact">Contact Us</a></p>
                </div>
            </div>
            <div className="master__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="master__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="master__navbar-menu_container scale-up-center">
                        <div className="master__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#aboutus">About Us</a></p>
                            <p><a href="#gallery">Gallery</a></p>
                            <p><a href="#features">Packages</a></p>
                            <p><a href="#contact">Contact Us</a></p>
                            <div className="master__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
