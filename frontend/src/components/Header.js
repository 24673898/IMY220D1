import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // Remove user data from localStorage
        localStorage.removeItem('currentUser');
        // Redirect to splash page
        navigate('/');
    };

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
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;