import React, { useState } from 'react';
import './Profile.css';
import fakeData from '../../fakeData/fakeData';
import User from '../User/User';

const Profile = () => {
    const first15 = fakeData.slice(0,15);
    const [profiles,setProfiles]=useState(first15); 

    return (
        <div className="player-container">

        <div className="profile-container">

             {
                  profiles.map(pd => <User profile={pd}></User>)
             }
           
        </div>

        <div className="cart-container">
            <h1>Total Salary</h1>
        </div>
         
     </div>

    );
};

export default Profile;