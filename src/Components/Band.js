import React from 'react';
import BandMemberCard from './BandMemberCard';

const Band = () => {
  // Define the data for the band members
  const bandMembers = [
    { name: 'Member 1', role: 'Role 1', image: 'member1.jpg' },
    { name: 'Member 2', role: 'Role 2', image: 'member2.jpg' },
    { name: 'Member 3', role: 'Role 3', image: 'member3.jpg' },
    { name: 'Member 4', role: 'Role 4', image: 'member4.jpg' },
    { name: 'Member 5', role: 'Role 5', image: 'member5.jpg' },
    { name: 'Member 6', role: 'Role 6', image: 'member6.jpg' },
  ];

  return (
    <div className="band">
      <h2>The MFC's</h2>
      <div className="band-members">
        {bandMembers.map((member, index) => (
          <BandMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Band;
