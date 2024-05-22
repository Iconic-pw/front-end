import React, { useState } from 'react';
import logo from "../../images/logo light.png";
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <a className="logo"><img src={logo} /></a>
            <div className="inner-nav ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/favorite">Favorite</NavLink>
                <NavLink to="/form">Form</NavLink>
                <Dropdown title="Category ˅" >
                    <NavLink to="/programming" >Programming</NavLink>
                    <NavLink to="/marketing" >Digital marketing</NavLink>
                    <NavLink to="/visual arts" >Visual arts</NavLink>
                </Dropdown>
                <NavLink to="/about">About us</NavLink>
            </div>
        </nav>
    );
};

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
                {title}
            </button>
            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Navbar;