import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import './SplashPage.css';

const SplashPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="splash-container">
            <div className="splash-content">
                {/* Left Side - Branding and Features */}
                <div className="splash-left">
                    <div className="branding">
                        <div className="logo">
                            <div className="logo-icon">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <rect x="5" y="5" width="50" height="50" rx="8" stroke="white" strokeWidth="2" fill="none"/>
                                    <path d="M15 20h30v25H15z" stroke="white" strokeWidth="2" fill="none"/>
                                    <path d="M20 25h20M20 30h15M20 35h25" stroke="white" strokeWidth="1.5"/>
                                    <text x="30" y="18" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">F</text>
                                </svg>
                            </div>
                            <h1 className="site-title">FrankCodeHub</h1>
                        </div>
                        
                        <h2 className="tagline">Where Code Meets Collaboration</h2>
                        
                        <p className="description">
                            Join thousands of developers who share, collaborate, and build amazing projects 
                            together. Share your code with the community, discover trending projects and 
                            technologies, and connect with fellow developers worldwide.
                        </p>
                        
                        <ul className="features-list">
                            <li>Share your coding projects with the community</li>
                            <li>Collaborate with friends on shared projects</li>
                            <li>Discover trending projects and technologies</li>
                            <li>Simple version control with check-in/check-out system</li>
                            <li>Connect with developers worldwide</li>
                        </ul>
                    </div>
                </div>
                
                {/* Right Side - Forms */}
                <div className="splash-right">
                    <div className="form-container">
                        {!isSignUp ? (
                            <LoginForm onToggleForm={toggleForm} />
                        ) : (
                            <SignUpForm onToggleForm={toggleForm} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashPage;