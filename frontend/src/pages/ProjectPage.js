import React, { useState } from 'react';
import Header from '../components/Header';
import Project from '../components/Project';
import EditProject from '../components/EditProject';
import FilesList from '../components/FilesList';
import Messages from '../components/Messages';
import './ProjectPage.css';

const ProjectPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    // Dummy project data
    const projectData = {
        id: 1,
        name: "React Dashboard",
        description: "A modern admin dashboard built with React hooks, context API, and Material-UI components. Features include user management, analytics, data visualization, and responsive design.",
        owner: {
            id: 1,
            firstName: "Frank",
            lastName: "Johnson",
            username: "frankdev"
        },
        type: "Web Application",
        version: "2.1.0",
        tags: ["#react", "#javascript", "#material-ui", "#dashboard"],
        status: "Checked In",
        createdDate: "March 15, 2024",
        lastModified: "2 days ago",
        image: "/assets/images/project-dashboard.png",
        collaborators: [
            { id: 2, name: "Sarah Wilson", username: "sarahdev" },
            { id: 3, name: "Mike Chen", username: "mikechen" },
            { id: 4, name: "Lisa Brown", username: "lisab" }
        ],
        downloads: 145,
        stars: 23
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = (updatedProject) => {
        console.log('Project updated:', updatedProject);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    return (
        <div className="project-page">
            <Header />
            <div className="project-container">
                {isEditing ? (
                    <EditProject 
                        project={projectData}
                        onSave={handleSaveEdit}
                        onCancel={handleCancelEdit}
                    />
                ) : (
                    <>
                        <Project 
                            project={projectData} 
                            onEdit={handleEdit}
                        />
                        
                        <div className="project-tabs">
                            <div className="tab-nav">
                                <button 
                                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('overview')}
                                >
                                    Overview
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'files' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('files')}
                                >
                                    Files
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('activity')}
                                >
                                    Activity
                                </button>
                            </div>
                            
                            <div className="tab-content">
                                {activeTab === 'overview' && (
                                    <div className="overview-content">
                                        <div className="project-stats-grid">
                                            <div className="stat-card">
                                                <h4>Downloads</h4>
                                                <span className="stat-number">{projectData.downloads}</span>
                                            </div>
                                            <div className="stat-card">
                                                <h4>Stars</h4>
                                                <span className="stat-number">{projectData.stars}</span>
                                            </div>
                                            <div className="stat-card">
                                                <h4>Collaborators</h4>
                                                <span className="stat-number">{projectData.collaborators.length}</span>
                                            </div>
                                            <div className="stat-card">
                                                <h4>Version</h4>
                                                <span className="stat-number">{projectData.version}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="collaborators-section">
                                            <h3>Collaborators</h3>
                                            <div className="collaborators-list">
                                                <div className="collaborator owner">
                                                    <div className="collaborator-avatar">
                                                        <span>{projectData.owner.firstName.charAt(0)}{projectData.owner.lastName.charAt(0)}</span>
                                                    </div>
                                                    <div className="collaborator-info">
                                                        <span className="collaborator-name">{projectData.owner.firstName} {projectData.owner.lastName}</span>
                                                        <span className="collaborator-role">Owner</span>
                                                    </div>
                                                </div>
                                                
                                                {projectData.collaborators.map(collaborator => (
                                                    <div key={collaborator.id} className="collaborator">
                                                        <div className="collaborator-avatar">
                                                            <span>{collaborator.name.split(' ').map(n => n.charAt(0)).join('')}</span>
                                                        </div>
                                                        <div className="collaborator-info">
                                                            <span className="collaborator-name">{collaborator.name}</span>
                                                            <span className="collaborator-role">Member</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {activeTab === 'files' && (
                                    <FilesList projectId={projectData.id} />
                                )}
                                
                                {activeTab === 'activity' && (
                                    <Messages projectId={projectData.id} />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectPage;