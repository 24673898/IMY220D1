import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onToggleForm }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // TODO: Connect to backend API in Part 5
            console.log('Login submitted:', formData);
            alert('Login form submitted! (This will connect to backend in Part 5)');
        }
    };

    return (
        <div className="auth-form">
            <h3 className="form-title">Welcome Back</h3>
            <p className="form-subtitle">Sign in to your account to continue</p>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Please enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Please enter your Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                
                <button type="submit" className="submit-btn">
                    Sign In
                </button>
            </form>
            
            <div className="form-footer">
                <p>New to FrankCodeHub?</p>
                <button type="button" className="toggle-btn" onClick={onToggleForm}>
                    Create new account
                </button>
            </div>
        </div>
    );
};

export default LoginForm;