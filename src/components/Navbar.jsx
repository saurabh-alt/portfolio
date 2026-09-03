import React from "react";

function Navbar() {
    return (
        <nav className="nav">

            {/* Logo */}
            <a className="brand"
                href="#home">
                Saurabh Nishad
                <div className="tagline">Java Developer</div>
            </a>

            {/* Navigation Links */}
            <div className="nav-links">
                <a href="#about">
                    About
                </a>
                <a href="#skills">
                    Skills
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#experience">
                    Experience
                </a>
                <a href="#contact">
                    Contact
                </a>
            </div>
            {/* Hire Me Button */}
            <a
                className="nav-btn"
                href="mailto:nsaurabh42050@gmail.com"
            >
                Hire Me
            </a>
        </nav>
    );
}

export default Navbar;