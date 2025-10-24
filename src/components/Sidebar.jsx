import React from 'react';
import pikuImage from '../assets/piku.jpg';

const Sidebar = ({ isOpen }) => {
  const skills = [
    { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
    { name: 'HTML/CSS', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'Node.js', icon: 'fab fa-node', color: '#339933' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' }
  ];

  const stats = [
    { label: 'Projects', value: '15+', icon: 'fas fa-code' },
    { label: 'Experience', value: '2 Years', icon: 'fas fa-calendar-alt' },
    { label: 'Happy Clients', value: '50+', icon: 'fas fa-users' }
  ];

  const projectFeatures = [
    { text: 'Multiple Engineering Departments', icon: 'fas fa-graduation-cap' },
    { text: 'Subject-wise Practice Modules', icon: 'fas fa-book' },
    { text: 'Real-time Timer & Score Tracking', icon: 'fas fa-stopwatch' },
    { text: 'Question Navigation Palette', icon: 'fas fa-list-check' },
    { text: 'Review Answers After Quiz', icon: 'fas fa-eye' },
    { text: 'Mark for Review Feature', icon: 'fas fa-bookmark' }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="profile-wrapper">
          <img src={pikuImage} alt="Piku Mandal" className="profile-pic" />
          <div className="profile-status"></div>
        </div>
        <h3 className="profile-name">Piku Mandal</h3>
        <p className="profile-title">Full Stack Developer</p>
        <div className="profile-tags">
          <span className="tag">🎓 Student</span>
          <span className="tag">💻 Developer</span>
        </div>
      </div>

      <div className="sidebar-content">
        {/* About Me Section */}
        <div className="sidebar-section about-section">
          <div className="section-header">
            <i className="fas fa-user-circle"></i>
            <h5>About Me</h5>
          </div>
          <p className="about-text">
            Hello! I'm <strong>Piku</strong>, a passionate developer dedicated to building innovative applications that solve real-world problems. I specialize in creating seamless user experiences and love exploring cutting-edge technologies.
          </p>
          <div className="interests">
            <span className="interest-tag"><i className="fas fa-code"></i> Coding</span>
            <span className="interest-tag"><i className="fas fa-rocket"></i> Innovation</span>
            <span className="interest-tag"><i className="fas fa-lightbulb"></i> Problem Solving</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="sidebar-section skills-section">
          <div className="section-header">
            <i className="fas fa-tools"></i>
            <h5>Tech Stack</h5>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{'--skill-color': skill.color}}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="sidebar-section stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <i className={stat.icon}></i>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About Project Section */}
        <div className="sidebar-section project-section">
          <div className="section-header">
            <i className="fas fa-project-diagram"></i>
            <h5>About This Project</h5>
          </div>
          <p className="project-description">
            A comprehensive <strong>MCQ Practice Portal</strong> designed for MAKAUT students to prepare for CA4 exams across multiple engineering disciplines.
          </p>
          <div className="feature-list">
            {projectFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <i className={feature.icon}></i>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="sidebar-section contact-section">
          <div className="section-header">
            <i className="fas fa-paper-plane"></i>
            <h5>Get In Touch</h5>
          </div>
          <div className="social-links">
            <a href="mailto:www.pikumandal@gmail.com" className="social-link email" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/its_piku_mandal/" target="_blank" rel="noopener noreferrer" className="social-link instagram" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/piku-mandal-237a66388/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://pikumandal2005.github.io/Portfolio-Web/" target="_blank" rel="noopener noreferrer" className="social-link portfolio" title="Portfolio">
              <i className="fas fa-globe"></i>
            </a>
            <a href="https://github.com/pikumandal2005" target="_blank" rel="noopener noreferrer" className="social-link github" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="footer-content">
          <p>Made with <i className="fas fa-heart"></i> by Piku Mandal</p>
          <p className="copyright">&copy; 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
