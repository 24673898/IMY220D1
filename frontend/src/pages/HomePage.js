import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import FriendsList from '../components/FriendsList';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <div className="homepage-container">
                <main className="homepage-main">
                    <Feed />
                </main>
                <aside className="homepage-sidebar">
                    <FriendsList />
                </aside>
            </div>
        </div>
    );
};

export default HomePage;