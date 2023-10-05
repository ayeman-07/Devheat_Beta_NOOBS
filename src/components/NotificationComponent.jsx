// NotificationsPage.jsx

import React from 'react';
import '../Sass/NotificationComponent.scss';

const NotificationsPage = () => {
  return (
    <div className="notifications-container">
      <div className="notification-content">
        <h1>Oops! No New Notifications</h1>
        <p>Please come back later.</p>
      </div>
    </div>
  );
};

export default NotificationsPage;
