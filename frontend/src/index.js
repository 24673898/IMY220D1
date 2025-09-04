import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";

// Simple auth state management (for demo purposes)
const isAuthenticated = () => {
    // TODO: Replace with actual authentication check
    // For now, check if user data exists in localStorage
    return localStorage.getItem('currentUser') !== null;
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/" replace />;
};

// Public Route component (redirect if authenticated)
const PublicRoute = ({ children }) => {
    return !isAuthenticated() ? children : <Navigate to="/home" replace />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route 
                    path="/" 
                    element={
                        <PublicRoute>
                            <SplashPage />
                        </PublicRoute>
                    } 
                />
                
                {/* Protected Routes */}
                <Route 
                    path="/home" 
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    } 
                />
                
                {/* Profile routes - separate for optional parameter */}
                <Route 
                    path="/profile" 
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/profile/:id" 
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } 
                />
                
                <Route 
                    path="/project/:id" 
                    element={
                        <ProtectedRoute>
                            <ProjectPage />
                        </ProtectedRoute>
                    } 
                />
                
                {/* Fallback route */}
                <Route 
                    path="*" 
                    element={
                        isAuthenticated() ? 
                        <Navigate to="/home" replace /> : 
                        <Navigate to="/" replace />
                    } 
                />
            </Routes>
        </Router>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);