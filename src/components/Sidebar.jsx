import React from 'react';
import pikuImage from '../assets/piku.jpg';

const Sidebar = ({ isOpen, departments, onStartQuiz }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img src={pikuImage} alt="Piku Mandal" className="profile-pic" />
        <h3>Piku Mandal</h3>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h5>Subjects</h5>
          {departments.map(dept => (
            <div key={dept.name}>
              <h6>{dept.name}</h6>
              {dept.semesters.length > 0 ? (
                <ul>
                  {dept.semesters.map(sem => (
                    <li key={sem.name}>
                      {sem.name}
                      <ul>
                        {sem.subjects.map(subject => (
                          <li key={subject.key}>
                            <button className="btn btn-link" onClick={() => onStartQuiz(subject)}>
                              {subject.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Coming Soon</p>
              )}
            </div>
          ))}
        </div>
        <div className="sidebar-section">
          <h5>About Me</h5>
          <p>Hello! I'm Piku, a dedicated and enthusiastic developer with a passion for building innovative and impactful applications. My journey in technology is driven by a desire to solve real-world problems and create seamless user experiences. I thrive on challenges and am constantly exploring new technologies to broaden my skillset. When I'm not coding, I enjoy exploring new places and staying up-to-date with the latest tech trends.</p>
        </div>
        <div className="sidebar-section">
          <h5>Contact</h5>
          <p><strong>Email:</strong> <a href="mailto:www.pikumandal@gmail.com">www.pikumandal@gmail.com</a></p>
        </div>
        <div className="sidebar-section">
          <h5>Follow Me</h5>
          <p className="social-link"><a href="https://www.instagram.com/its_piku_mandal/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p className="social-link"><a href="https://www.linkedin.com/in/piku-mandal-237a66388/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p className="social-link"><a href="https://pikumandal2005.github.io/Portfolio-Web/" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
        </div>
        <div className="sidebar-section">
          <h5>About the Project</h5>
          <p>This is a web-based MCQ quiz application designed to help students practice and learn concepts of Numerical Methods and Electric Circuit Theory. It features a clean and modern user interface, a timer, a score tracker, and a question palette for easy navigation. At the end of the quiz, users can review their answers.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;