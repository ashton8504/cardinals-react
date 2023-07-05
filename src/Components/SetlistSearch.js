import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SetlistTracker = () => {
  const [currentSetlist, setCurrentSetlist] = useState(null);
  const [allSetlists, setAllSetlists] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  useEffect(() => {
    const fetchSetlists = async () => {
      try {
         const artistName = `"Ryan Adams & the Cardinals"`;
        const apiUrl = `https://api.setlist.fm/rest/1.0/search/setlists?artistName=${encodeURIComponent(
          artistName
        )}&year=${selectedYear}`;

        const response = await axios.get(apiUrl, {
          headers: {
            Accept: 'application/json',
            'x-api-key': apiKey,
          },
        });

        const { data } = response;
        if (data.setlist && data.setlist.length > 0) {
          setCurrentSetlist(data.setlist[0]);
          setAllSetlists(data.setlist);
        } else {
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
      <h2>Setlist Tracker</h2>
      <label htmlFor="year-select">Select Year:</label>
      <select id="year-select" value={selectedYear} onChange={handleYearChange}>
        <option value={2023}>2023</option>
        <option value={2022}>2022</option>
        <option value={2021}>2021</option>
        {/* Add more options for different years */}
      </select>

      <h3>Current Setlist</h3>
      {currentSetlist ? (
        <div>
          <p>Date: {currentSetlist.eventDate}</p>
          <p>Venue: {currentSetlist.venue.name}</p>
          <p>City: {currentSetlist.venue.city.name}</p>
          {/* Display other relevant information */}
        </div>
      ) : (
        <p>No current setlist found.</p>
      )}

      <h3>All Setlists</h3>
      {allSetlists.length > 0 ? (
        <ul>
          {allSetlists.map((setlist) => (
            <li key={setlist.id}>
              <p>Date: {setlist.eventDate}</p>
              <p>Venue: {setlist.venue.name}</p>
              <p>City: {setlist.venue.city.name}</p>
              {/* Display other relevant information */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No setlists found.</p>
      )}
    </div>
  );
};

export default SetlistTracker;
