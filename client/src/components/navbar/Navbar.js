import React from 'react';
import "./Navbar.sass"
import logo from "./../../assets/img/logo.png"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state=>state.user.isAuth)
    return (
        <div className="navbar">
            <div className="image">
                <img src={logo} alt=""/>
            </div>
            <div className="menu">
                <ul>
                    {!isAuth && <li><NavLink to="/login">Sign in</NavLink></li>}
                    {!isAuth && <li><NavLink to="/reg">Registration</NavLink></li>}
                    {isAuth &&<li onClick={()=>{dispatch(logout())}}>Exit</li>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;