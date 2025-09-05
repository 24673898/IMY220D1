import React from 'react';
import './ProfilePreview.css';

const ProfilePreview = ({ user, showFollowButton = true, onClick }) => {
    const handleProfileClick = () => {
        if (onClick) {
            onClick(user);
        } else {
            // TODO: Navigate to user's profile page
            console.log('View profile:', user.username);
        }
    };

    const handleFollowClick = (e) => {
        e.stopPropagation();
        // TODO: Implement follow/unfollow functionality
        console.log('Follow user:', user.username);
    };

    return (
        <div className="profile-preview" onClick={handleProfileClick}>
            <div className="profile-preview-avatar">
                <div className="avatar-placeholder">
                    <span>{user.firstName?.charAt(0)}{user.lastName?.charAt(0)}</span>
                </div>
                {user.isOnline && <div className="online-indicator"></div>}
            </div>
            
            <div className="profile-preview-info">
                <h4 className="profile-preview-name">
                    {user.firstName} {user.lastName}
                </h4>
                <p className="profile-preview-username">@{user.username}</p>
                
                {user.bio && (
                    <p className="profile-preview-bio">
                        {user.bio.length > 60 ? `${user.bio.substring(0, 60)}...` : user.bio}
                    </p>
                )}
                
                <div className="profile-preview-stats">
                    <span className="stat">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" 
                                  stroke="currentColor" strokeWidth="2"/>
                            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        {user.projectCount || 0} projects
                    </span>
                    <span className="stat">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        {user.friendCount || 0} friends
                    </span>
                </div>
            </div>
            
            {showFollowButton && (
                <div className="profile-preview-actions">
                    <button 
                        className={`follow-btn ${user.isFollowing ? 'following' : ''}`}
                        onClick={handleFollowClick}
                    >
                        {user.isFollowing ? 'Following' : 'Follow'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePreview;