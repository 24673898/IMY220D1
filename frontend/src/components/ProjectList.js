import React from 'react';
import './ProjectList.css';

const ProjectList = ({ userId, onCreateProject }) => {
    // Dummy project data
    const userProjects = [
        {
            id: 1,
            name: "React Dashboard",
            description: "A modern admin dashboard built with React and Material-UI",
            tags: ["#react", "#javascript", "#material-ui"],
            status: "Checked In",
            lastModified: "2 days ago",
            collaborators: 3,
            downloads: 45
        },
        {
            id: 2,
            name: "Node.js API Server",
            description: "RESTful API with authentication and database integration",
            tags: ["#nodejs", "#express", "#mongodb"],
            status: "Checked Out",
            lastModified: "5 days ago",
            collaborators: 2,
            downloads: 23
        },
        {
            id: 3,
            name: "CSS Animation Library",
            description: "Collection of smooth CSS animations for web projects",
            tags: ["#css", "#animations", "#scss"],
            status: "Checked In",
            lastModified: "1 week ago",
            collaborators: 1,
            downloads: 78
        }
    ];

    const handleProjectClick = (project) => {
        // TODO: Navigate to individual project page
        console.log('View project:', project.name);
    };

    const handleEditProject = (project, e) => {
        e.stopPropagation();
        // TODO: Open edit project modal/page
        console.log('Edit project:', project.name);
    };

    const handleDeleteProject = (project, e) => {
        e.stopPropagation();
        if (window.confirm(`Are you sure you want to delete "${project.name}"?`)) {
            console.log('Delete project:', project.name);
            // TODO: Implement delete functionality
        }
    };

    return (
        <div className="project-list-card">
            <div className="project-list-header">
                <h3 className="project-list-title">My Projects</h3>
                <button className="create-project-btn" onClick={onCreateProject}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    New Project
                </button>
            </div>
            
            {userProjects.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" 
                                  stroke="currentColor" strokeWidth="2"/>
                            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                            <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                    </div>
                    <h4>No Projects Yet</h4>
                    <p>Create your first project to get started</p>
                    <button className="create-first-project-btn" onClick={onCreateProject}>
                        Create Project
                    </button>
                </div>
            ) : (
                <div className="projects-grid">
                    {userProjects.map(project => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className="project-card-header">
                                <h4 className="project-name">{project.name}</h4>
                                <div className="project-actions">
                                    <button 
                                        className="action-btn edit-btn"
                                        onClick={(e) => handleEditProject(project, e)}
                                        title="Edit Project"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" 
                                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5Z" 
                                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <button 
                                        className="action-btn delete-btn"
                                        onClick={(e) => handleDeleteProject(project, e)}
                                        title="Delete Project"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2"/>
                                            <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2" 
                                                  stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            
                            <div className="project-meta">
                                <div className="project-stats">
                                    <span className="stat">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                        {project.collaborators}
                                    </span>
                                    <span className="stat">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" 
                                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        {project.downloads}
                                    </span>
                                </div>
                                
                                <span className={`project-status ${project.status === 'Checked In' ? 'checked-in' : 'checked-out'}`}>
                                    {project.status}
                                </span>
                            </div>
                            
                            <div className="project-footer">
                                <span className="last-modified">Updated {project.lastModified}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectList;