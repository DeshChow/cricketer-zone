import React from 'react';
import './User.css'

const User = (props) => {
    const { image, name, email, phone, salary } = props.profile;
    return (
        <div>
            <div className="user">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className="user-name">{name}</h4>
                <p>Email:{email}</p>
                <p>Phone: {phone}</p>
                <p>Salary: {salary}</p>
                
            </div>
        </div>
            
        </div>
    );
};

export default User;