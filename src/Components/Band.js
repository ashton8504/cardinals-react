import React from 'react';
import BandMemberCard from './BandMemberCard';

import DRAImage from '../images/band/DRA.png';
import bradImage from '../images/band/brad.png';
import wasManImage from '../images/band/WasMan.png';
import chrisImage from '../images/band/chris.png';
import clarkeImage from '../images/band/clarke.png';
import MFC from "../images/band/cardinalsFullBand.png"


const Band = () => {
  const bandMembers = [
   { name: 'Ryan Adams', role: 'Guitar/Vox', image: DRAImage },
   { name: 'Brad Pemberton', role: 'Drums', image: bradImage },
   { name: 'Was Man', role: 'Bass', image: wasManImage },
   { name: 'Chris Stills', role: 'Guitar/Vox', image: chrisImage },
   { name: 'MFC', role: "", image: MFC },
   { name: 'Daniel Clarke', role: 'Keys', image: clarkeImage },
  ];

  console.log(bandMembers);

  return (
    <div className="band">
        <h2 className='bandCard--header'>Mach III</h2>
        <hr />
      <div className="band-members">
         {bandMembers.map((member, index) => (
            <BandMemberCard
               key={index}
               name={member.name}
               role={member.role}
               image={member.image}
               className={index >= 3 ? 'band-member-card--bottom' : ''}
            />
         ))}
      </div>
     </div>
     
  );
};

export default Band;
