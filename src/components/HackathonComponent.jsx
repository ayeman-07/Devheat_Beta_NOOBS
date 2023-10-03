// HackathonsPage.jsx

import React from 'react';
import '../Sass/HackathonComponent.scss';
// HackathonsPage.jsx



const HackathonsPage = () => {
  // Sample hackathons data
  const hackathons = [
    {
      name: 'Hackathon 1',
      date: 'October 15, 2023',
      description: 'Join us for an exciting coding challenge!',
    },
    {
      name: 'Hackathon 2',
      date: 'November 1, 2023',
      description: 'A hackathon focused on innovation and collaboration.',
    },
    {
      name: 'Hackathon 2',
      date: 'November 1, 2023',
      description: 'A hackathon focused on innovation and collaboration.',
    },
    {
      name: 'Hackathon 2',
      date: 'November 1, 2023',
      description: 'A hackathon focused on innovation and collaboration.',
    },
    {
      name: 'Hackathon 2',
      date: 'November 1, 2023',
      description: 'A hackathon focused on innovation and collaboration.',
    },
    {
      name: 'Hackathon 2',
      date: 'November 1, 2023',
      description: 'A hackathon focused on innovation and collaboration.',
    },
    // Add more hackathons as needed
  ];

  return (
    <div className="hackathons-container">
      <h1>Upcoming Hackathons</h1>
      <div className="hackathons-list">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="hackathon-card">
            <div className="hackathon-image">
              {/* You can add an image for each hackathon here */}
            </div>
            <div className="hackathon-details">
              <h2>{hackathon.name}</h2>
              <p>Date: {hackathon.date}</p>
              <p>{hackathon.description}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonsPage;
