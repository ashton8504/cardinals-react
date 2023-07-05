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
     { name: 'Daniel Clarke', role: 'Keys', image: clarkeImage },
   ];
 
   return (
     <div className="band">
       <h2 className="bandCard--header">Mach III</h2>
       <div className="band-members">
         {bandMembers.map((member, index) => (
           <div className="band-member-card" key={index}>
             <div className="band-member-card-image-container">
               <img
                 className="band-member-card-image"
                 src={member.image}
                 alt={member.name}
               />
             </div>
             <h3 className="band-member-card-name">{member.name}</h3>
             <p className="band-member-card-role">{member.role}</p>
           </div>
         ))}
       </div>
     </div>
   );
 };
 

export default Band;
