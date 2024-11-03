import React from "react";

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-logo">
                    <img src="/logo-okostudio.svg" alt="OKO Studio Logo" />
                </div>
            </div>
            <div className="nav-menu-icon">
                <svg width="80" height="50" viewBox="0 0 80 50">
                    <path d="M80,0H0l9.7,38.7c1.7,6.6,7.6,11.3,14.4,11.3h55.9V0Z" />

                    <g id="burger">
                        <path className="white" d="M30,18,L55,18" />
                        <path className="white" d="M30,25,L55,25" />
                        <path className="white" d="M30,32,L55,32" />
                    </g>
                </svg>
            </div>
        </nav>
    );
};

export default Nav;
