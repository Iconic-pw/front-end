import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar">
            <a href="/" className="logo"></a>
            <div className="menu-icon" onClick={toggleNav}>
                &#9776;
            </div>
            <div className={`inner-nav ${isNavOpen ? 'active' : ''}`}>
                <NavLink href="#Home">Home</NavLink>
                <NavLink href="#Favorite">Favorite</NavLink>
                <NavLink href="#Form">Form</NavLink>
                <Dropdown title="Category">
                    <a href="#">Programming</a>
                    <a href="#">Digital Marketing</a>
                    <a href="#">Visual Arts</a>
                </Dropdown>
                <NavLink href="#About us">About Us</NavLink>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }) => (
    <a href={href} className="nav-link">
        {children}
    </a>
);

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
