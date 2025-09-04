import React from 'react';
import './FriendsList.css';

const FriendsList = () => {
    // Dummy friends data
    const friends = [
        {
            id: 1,
            name: "Jack",
            username: "jack_dev",
            profileImage: "/assets/images/jack-avatar.png",
            isOnline: true
        },
        {
            id: 2,
            name: "Abby",
            username: "abby_codes",
            profileImage: "/assets/images/abby-avatar.png",
            isOnline: false
        },
        {
            id: 3,
            name: "Sarah",
            username: "sarah_ui",
            profileImage: "/assets/images/sarah-avatar.png",
            isOnline: true
        }
    ];

    const handleFriendClick = (friend) => {
        // TODO: Navigate to friend's profile
        console.log('View profile:', friend.username);
    };

    return (
        <div className="friends-list">
            <div className="friends-header">
                <h3 className="friends-title">Friends</h3>
                <span className="friends-count">{friends.length}</span>
            </div>
            
            <div className="friends-content">
                {friends.map(friend => (
                    <div 
                        key={friend.id} 
                        className="friend-item"
                        onClick={() => handleFriendClick(friend)}
                    >
                        <div className="friend-avatar">
                            {/* Placeholder avatar */}
                            <div className="avatar-placeholder">
                                <span>{friend.name.charAt(0)}</span>
                            </div>
                            {friend.isOnline && <div className="online-indicator"></div>}
                        </div>
                        
                        <div className="friend-info">
                            <h4 className="friend-name">{friend.name}</h4>
                            <p className="friend-username">@{friend.username}</p>
                        </div>
                        
                        <div className="friend-status">
                            <span className={`status-dot ${friend.isOnline ? 'online' : 'offline'}`}></span>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="add-friend-btn">
                <span className="plus-icon">+</span>
                Add Friends
            </button>
        </div>
    );
};

export default FriendsList;