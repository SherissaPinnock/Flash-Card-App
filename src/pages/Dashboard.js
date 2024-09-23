import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import '../CSS/Dashboard.css'; // Import the CSS file for the container

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default Dashboard;
