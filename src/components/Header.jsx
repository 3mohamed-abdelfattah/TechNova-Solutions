import React, { useState } from 'react';
import '../styles/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for open/close menu

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <h1 className="header-title">TechNova Solutions</h1>

            {/* Burger icon */}
            <div className="burger-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation links */}
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;