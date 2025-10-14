
import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="text-center">
      <h2 className="mb-4">Welcome to the MCQ Game Portal!</h2>
      <p className="mb-4">Select a subject to start the quiz.</p>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary btn-lg" onClick={() => onStart('numerical-methods')}>
          Numerical Methods
        </button>
        <button className="btn btn-success btn-lg" onClick={() => onStart('electric-circuit')}>
          Electric Circuit Theory
        </button>
        <button className="btn btn-info btn-lg" onClick={() => onStart('indian-constitution')}>
          Indian Constitution
        </button>
        <button className="btn btn-warning btn-lg" onClick={() => onStart('analog-electronics')}>
          Analog Electronics
        </button>
        <button className="btn btn-danger btn-lg" onClick={() => onStart('emft')}>
          Electro Magnetic Field Theory
        </button>
        <button className="btn btn-secondary btn-lg" onClick={() => onStart('biology')}>
          Biology for Engineers
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
