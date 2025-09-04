import React from 'react';
import './Profile.css';

const Profile = ({ user, onEdit }) => {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-avatar">
                    <div className="avatar-placeholder">
                        <span>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</span>
                    </div>
                </div>
                
                <div className="profile-info">
                    <h1 className="profile-name">{user.firstName} {user.lastName}</h1>
                    <p className="profile-username">@{user.username}</p>
                    <p className="profile-bio">{user.bio}</p>
                </div>
                
                <button className="edit-profile-btn" onClick={onEdit}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5Z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Edit Profile
                </button>
            </div>
            
            <div className="profile-details">
                <div className="profile-stats">
                    <div className="stat-item">
                        <span className="stat-number">12</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">8</span>
                        <span className="stat-label">Collaborations</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24</span>
                        <span className="stat-label">Friends</span>
                    </div>
                </div>
                
                <div className="profile-meta">
                    <div className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>{user.location}</span>
                    </div>
                    
                    <div className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" 
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="m14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" 
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <a href={user.website} className="profile-link">{user.website}</a>
                    </div>
                    
                    <div className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>Joined {user.joinDate}</span>
                    </div>
                    
                    <div className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
                                  stroke="currentColor" strokeWidth="2"/>
                            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>{user.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;