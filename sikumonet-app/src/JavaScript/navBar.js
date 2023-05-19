import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navBar.css'

const TopNavigation = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setIsActive(true);
    };

    const resetActive = () => {
        setIsActive(false);
    };

    const isActivePage = (path) => {
        return location.pathname === path && isActive;
    };

    return (
        <div
            className="topnav"
            //style={{ backgroundColor: isActive ? '5B8BDF' : '5B8BDF' }}
        >
            <Link
                to="/Sikumonet"
                className={isActivePage('/Sikumonet') ? 'active' : ''}
                onMouseEnter={handleClick}
                onMouseLeave={resetActive}
            >
                Sikumonet
            </Link>
            <Link
                to="/news"
                className={isActivePage('/news') ? 'active' : ''}
                onMouseEnter={handleClick}
                onMouseLeave={resetActive}
            >
                News
            </Link>
            <Link
                to="/contact"
                className={isActivePage('/contact') ? 'active' : ''}
                onMouseEnter={handleClick}
                onMouseLeave={resetActive}
            >
                Contact
            </Link>
            <Link
                to="/login"
                className={isActivePage('/login') ? 'active' : ''}
                onMouseEnter={handleClick}
                onMouseLeave={resetActive}
            >
                Login
            </Link>
        </div>
    );
};

export default TopNavigation;
