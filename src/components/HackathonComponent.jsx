// HackathonsPage.jsx

import React from 'react';
import '../Sass/HackathonComponent.scss';

const hackathons = [
  {
    name: 'Hackathon 1',
    date: 'October 15, 2023',
  },
  {
    name: 'Hackathon 2',
    date: 'November 1, 2023',
  },
  // Add more hackathons as needed
];

const HackathonsPage = () => {
  return (
    
    <div className="hackathons-container">
      <h1>Upcoming Hackathons</h1>
      <div className="hackathons-list">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="hackathon-card">
            <h2>{hackathon.name}</h2>
            <p>Date: {hackathon.date}</p>
            <button className="apply-button">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonsPage;
