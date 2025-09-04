import React, { useState } from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import ProjectList from '../components/ProjectList';
import CreateProject from '../components/CreateProject';
import './ProfilePage.css';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [showCreateProject, setShowCreateProject] = useState(false);

    // Dummy user data
    const userData = {
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

    return (
        <div className="profile-page">
            <Header />
            <div className="profile-container">
                <div className="profile-main">
                    {isEditing ? (
                        <EditProfile 
                            user={userData} 
                            onCancel={() => setIsEditing(false)}
                            onSave={() => setIsEditing(false)}
                        />
                    ) : (
                        <Profile 
                            user={userData} 
                            onEdit={() => setIsEditing(true)} 
                        />
                    )}
                    
                    {showCreateProject ? (
                        <CreateProject 
                            onCancel={() => setShowCreateProject(false)}
                            onSave={() => setShowCreateProject(false)}
                        />
                    ) : (
                        <ProjectList 
                            userId={userData.id}
                            onCreateProject={() => setShowCreateProject(true)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;