import React, { useState } from 'react';
import './StartScreen.css';

const StartScreen = ({ departments, onStart }) => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedSem, setSelectedSem] = useState(null);

  const handleDeptSelect = (dept) => {
    setSelectedDept(dept);
    setSelectedSem(null);
  };

  const handleSemSelect = (sem) => {
    setSelectedSem(sem);
  };

  const handleBack = () => {
    if (selectedSem) {
      setSelectedSem(null);
    } else if (selectedDept) {
      setSelectedDept(null);
    }
  };

  return (
    <div className="start-screen-container">
      <div className="welcome-header">
        <div className="icon-wrapper">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <h1 className="main-title">MAKAUT University</h1>
        <h2 className="sub-title">CA4 Exam Practice Portal</h2>
        <p className="description">
          Master your concepts with comprehensive MCQ practice across multiple engineering disciplines
        </p>
        <div className="stats-row">
          <div className="stat-item">
            <i className="fas fa-users"></i>
            <span>5000+ Students</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-book"></i>
            <span>Multiple Subjects</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-trophy"></i>
            <span>Exam Ready</span>
          </div>
        </div>
      </div>

      {!selectedDept && (
        <div className="selection-container fade-in">
          <h3 className="selection-title">
            <i className="fas fa-building"></i>
            Select Your Department
          </h3>
          <div className="cards-grid">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className="dept-card"
                onClick={() => handleDeptSelect(dept)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon">
                  <i className="fas fa-university"></i>
                </div>
                <h4>{dept.name}</h4>
                <p>{dept.semesters.length} Semesters Available</p>
                <div className="card-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedDept && !selectedSem && (
        <div className="selection-container fade-in">
          <button className="back-button" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back to Departments
          </button>
          <h3 className="selection-title">
            <i className="fas fa-calendar-alt"></i>
            Select Semester - {selectedDept.name}
          </h3>
          <div className="cards-grid">
            {selectedDept.semesters.length > 0 ? (
              selectedDept.semesters.map((sem, index) => (
                <div
                  key={sem.name}
                  className="sem-card"
                  onClick={() => handleSemSelect(sem)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-icon semester-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <h4>{sem.name}</h4>
                  <p>{sem.subjects.length} Subjects</p>
                  <div className="card-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              ))
            ) : (
              <div className="coming-soon">
                <i className="fas fa-clock"></i>
                <h4>Coming Soon</h4>
                <p>Content for this department is being prepared</p>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedDept && selectedSem && (
        <div className="selection-container fade-in">
          <button className="back-button" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back to Semesters
          </button>
          <h3 className="selection-title">
            <i className="fas fa-book-reader"></i>
            Select Subject - {selectedDept.name} ({selectedSem.name})
          </h3>
          <div className="subjects-list">
            {selectedSem.subjects.map((subject, index) => (
              <div
                key={subject.key}
                className="subject-card"
                onClick={() => onStart(subject)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="subject-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="subject-info">
                  <h4>{subject.name}</h4>
                  <p>Click to start practice</p>
                </div>
                <div className="subject-action">
                  <i className="fas fa-play-circle"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartScreen;
