import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/navBar.css'

const TopNavigation = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setIsActive(true);
    };

    const resetActive = () => {
        setIsActive(false);
    };

    useEffect(() => {
        const handleMouseLeave = () => {
            setIsActive(false);
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const isActivePage = (path) => {
        return location.pathname === path && isActive;
    };

    return (
        <div className="topnav">
            <Link
                to="/Sikumonet"
                id="appName"
                onMouseEnter={handleClick}
                sonMouseLeave={resetActive}
            >
                Sikumonet
            </Link>
            <Link
                to="/credits"
                className="navItem"
                onMouseEnter={handleClick}
                onMouseLeave={resetActive}
            >
                Credits
            </Link>
            <Link
                to="/aboutus"
                className="navItem"
                onMouseEnter={handleClick}
                onMouseLeave={resetActive}
            >
                About us
            </Link>
            <Link
                to="/login"
                className="navItem"
                onMouseEnter={handleClick}
                onMouseLeave={resetActive}
            >
                Login
            </Link>
        </div>
    );
};

export default TopNavigation;
