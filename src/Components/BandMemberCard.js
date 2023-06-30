import React from 'react';

const BandMemberCard = ({ name, role, image }) => {
  return (
    <div className="band-member-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
};

export default BandMemberCard;
