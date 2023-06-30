import React, { useEffect, useState } from 'react';
import logoImage from '../images/cardinalsLogoOne.png';

export default function Header() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     setIsVisible(true);
   }, []);

   return (
     <div className={`header--container ${isVisible ? 'fade-in-out' : ''}`}>
       <h1 className="header--title">The Cardinals</h1>
         <img className="header--image"
            src={logoImage}
            alt="Cardinals Logo"
         />
         <h4 className='est--title'>Est. 2004</h4>
     </div>
   );
}
