
import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img src="/assets/piku.jpg" alt="Piku Mandal" className="profile-pic" />
        <h3>Piku Mandal</h3>
      </div>
      <div className="sidebar-content">
        <p><strong>College:</strong> GKCIET, Malda</p>
        <p><strong>Department:</strong> Electrical Engineering</p>
        <p><strong>Degree:</strong> Bachelor of Technology</p>
        <p><strong>Year:</strong> 2nd Year</p>
      </div>
    </div>
  );
};

export default Sidebar;
