import React, { useState, useEffect } from 'react';

const SetlistTracker = () => {
  const [currentSetlist, setCurrentSetlist] = useState(null);
  const [allSetlists, setAllSetlists] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const apiKey = 'EvPIZs_8Ptiqyp0oQve97Tr1o00XJKsV9qMt'; // Replace with your actual API key

  useEffect(() => {
    const fetchSetlists = async () => {
      try {
        const artistName = `"Ryan Adams & the Cardinals"`;
        const apiUrl = `https://api.setlist.fm/rest/1.0/search/setlists?artistName=${encodeURIComponent(
          artistName
        )}&year=${selectedYear}`;

        const response = await fetch(apiUrl, {
          headers: {
            Accept: 'application/json',
            'x-api-key': apiKey,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.setlist && data.setlist.length > 0) {
            setCurrentSetlist(data.setlist[0]);
            setAllSetlists(data.setlist);
          } else {
            setCurrentSetlist(null);
            setAllSetlists([]);
          }
        } else {
          console.error('Error fetching setlists:', response.statusText);
          setCurrentSetlist(null);
          setAllSetlists([]);
        }
      } catch (error) {
        console.error('Error fetching setlists:', error);
        setCurrentSetlist(null);
        setAllSetlists([]);
      }
    };

    fetchSetlists();
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="setlist-tracker">
      {/* The rest of your component JSX */}
    </div>
  );
};

export default SetlistTracker;
