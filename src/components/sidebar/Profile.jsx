import React from 'react';
import "./Profile.css"

function Profile() {
    return (
        <div className="profile">
            <img className="profile-image" src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" alt="" />
            <div>
                <h4 className="heading"> Hi Reader,</h4>
                <p className="description" > Here's your news! </p>
            </div>
        </div>
    )
}

export default Profile
