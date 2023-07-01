import React from 'react';

const BandMemberCard = ({ name, role, image }) => {
  return (
    <div className="band-member-card">
      <div className="band-member-card-image-container">
        <img src={image} alt={name} className="band-member-card-image" />
      </div>
      <h3 className="band-member-card-name">{name}</h3>
      <p className="band-member-card-role">{role}</p>
    </div>
  );
};

export default BandMemberCard;
