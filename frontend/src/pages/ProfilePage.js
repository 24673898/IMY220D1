import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import ProjectList from '../components/ProjectList';
import CreateProject from '../components/CreateProject';
import './ProfilePage.css';

const ProfilePage = () => {
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [showCreateProject, setShowCreateProject] = useState(false);

    // Get current user from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const isOwnProfile = !id || id === currentUser.id?.toString();

    // Dummy user data for other profiles
    const otherUserData = {
        id: parseInt(id) || 1,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        username: "janedev",
        bio: "Frontend developer specializing in React and modern web technologies",
        location: "New York, NY",
        website: "https://janesmith.dev",
        joinDate: "March 2024",
        profileImage: "/assets/images/jane-avatar.png"
    };

    // Default user data for own profile
    const defaultUserData = {
        id: 1,
        firstName: "Frank",
        lastName: "Johnson",
        email: "frank@frankcodehub.com",
        username: "frankdev",
        bio: "Full-stack developer passionate about creating amazing web applications",
        location: "San Francisco, CA",
        website: "https://frankdev.com",
        joinDate: "January 2024",
        profileImage: "/assets/images/frank-avatar.png"
    };

    // Use current user data if available, otherwise use default
    const ownProfileData = Object.keys(currentUser).length > 0 ? {
        ...defaultUserData,
        ...currentUser,
        profileImage: currentUser.profileImage || defaultUserData.profileImage
    } : defaultUserData;

    // Determine which user data to display
    const userData = isOwnProfile ? ownProfileData : otherUserData;

    return (
        <div className="profile-page">
            <Header />
            <div className="profile-container">
                <div className="profile-main">
                    {isEditing && isOwnProfile ? (
                        <EditProfile 
                            user={userData} 
                            onCancel={() => setIsEditing(false)}
                            onSave={() => setIsEditing(false)}
                        />
                    ) : (
                        <Profile 
                            user={userData} 
                            onEdit={isOwnProfile ? () => setIsEditing(true) : undefined}
                            isOwnProfile={isOwnProfile}
                        />
                    )}
                    
                    {showCreateProject && isOwnProfile ? (
                        <CreateProject 
                            onCancel={() => setShowCreateProject(false)}
                            onSave={() => setShowCreateProject(false)}
                        />
                    ) : (
                        <ProjectList 
                            userId={userData.id}
                            onCreateProject={isOwnProfile ? () => setShowCreateProject(true) : undefined}
                            isOwnProfile={isOwnProfile}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;