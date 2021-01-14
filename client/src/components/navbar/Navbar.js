import React from 'react';
import "./Navbar.sass"
import logo from "./../../assets/img/logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="image">
                <img src={logo} alt=""/>
            </div>
            <div className="menu">
                <ul>
                    <li>Sign in </li>
                    <li>Registration</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;