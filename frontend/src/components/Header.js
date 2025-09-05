import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link to="/home" className="header-logo">
                    <div className="logo-icon">
                        <img src="/assets/images/logo.png" alt="Logo" width="40" height="40" />
                    </div>
                    <h1 className="site-title">FrankCodeHub</h1>
                </Link>

                {/* Navigation */}
                <nav className="header-nav">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <SearchInput />
                    <Link to="/profile" className="nav-link">Profile</Link>
                    <Link to="/" className="nav-link">Exit</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;