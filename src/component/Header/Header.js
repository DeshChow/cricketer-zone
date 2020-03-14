import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Cricketer Zone</h1>
            <nav>
                <a href="/profile">Profile</a>
                <a href="/player stats">Player Stats</a>
                <a href="/country stats">Country Stats</a>
            </nav>
        </div>
    );
};

export default Header;