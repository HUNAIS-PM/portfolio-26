import React from 'react';
import './Profile.css';

const Profile = ({ imageUrl }) => {
  return (
    <div className="profile">
      <div className="inner-profile">
        <div className="img no-select no-drag" style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
    </div>
  );
}

export default Profile;
