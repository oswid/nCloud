import React from 'react';
import "./Navbar.sass"
import logo from "./../../assets/img/logo.png"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="image">
                <img src={logo} alt=""/>
            </div>
            <div className="menu">
                <ul>
                    <li><NavLink to="/login">Sign in</NavLink></li>
                    <li><NavLink to="/reg">Registration</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;