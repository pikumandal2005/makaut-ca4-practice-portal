import React, { useState } from 'react';

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
    <div className="text-center">
      <h2 className="mb-4">Welcome to the University Exam Portal!</h2>

      {!selectedDept && (
        <>
          <p className="mb-4">Select a department to begin.</p>
          <div className="d-grid gap-2 col-6 mx-auto">
            {departments.map((dept) => (
              <button
                key={dept.name}
                className="btn btn-primary btn-lg"
                onClick={() => handleDeptSelect(dept)}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </>
      )}

      {selectedDept && !selectedSem && (
        <>
          <p className="mb-4">Select a semester for {selectedDept.name}.</p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-secondary btn-lg mb-3" onClick={handleBack}>
              Back to Departments
            </button>
            {selectedDept.semesters.length > 0 ? (
              selectedDept.semesters.map((sem) => (
                <button
                  key={sem.name}
                  className="btn btn-success btn-lg"
                  onClick={() => handleSemSelect(sem)}
                >
                  {sem.name}
                </button>
              ))
            ) : (
              <p>Coming Soon</p>
            )}
          </div>
        </>
      )}

      {selectedDept && selectedSem && (
        <>
          <p className="mb-4">Select a subject for {selectedDept.name} - {selectedSem.name}.</p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-secondary btn-lg mb-3" onClick={handleBack}>
              Back to Semesters
            </button>
            {selectedSem.subjects.map((subject) => (
              <button
                key={subject.key}
                className="btn btn-info btn-lg"
                onClick={() => onStart(subject)}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StartScreen;
