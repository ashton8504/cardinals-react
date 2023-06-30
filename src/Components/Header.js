import React, { useEffect, useState } from 'react';


export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`header--container ${isVisible ? 'fade-in-out' : ''}`}>
      <h1 className="header--title">The Cardinals</h1>
    </div>
  );
}
