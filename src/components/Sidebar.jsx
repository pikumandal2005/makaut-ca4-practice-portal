
import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img src="/assets/piku.jpg" alt="Piku Mandal" className="profile-pic" />
        <h3>Piku Mandal</h3>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h5>About Me</h5>
          <p><strong>College:</strong> GKCIET, Malda</p>
          <p><strong>Department:</strong> Electrical Engineering</p>
          <p><strong>Degree:</strong> Bachelor of Technology</p>
          <p><strong>Year:</strong> 2nd Year</p>
        </div>
        <div className="sidebar-section">
          <h5>About the Project</h5>
          <p>This is a web-based MCQ quiz application designed to help students practice and learn concepts of Numerical Methods.</p>
        </div>
        <div className="sidebar-section">
          <h5>Syllabus</h5>
          <ul>
            <li>Module 1: Accuracy and Precision of Numbers</li>
            <li>Module 2: Solution of Algebraic and Transcendental Equations</li>
            <li>Module 3: Interpolation</li>
            <li>Module 4: Numerical Integration</li>
            <li>Module 5: Ordinary Differential Equations</li>
            <li>Module 6: Solution of System of Linear Equations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
