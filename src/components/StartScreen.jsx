
import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="text-center">
      <h2 className="mb-4">Welcome to the Numerical Methods Quiz!</h2>
      <p className="mb-4">Test your knowledge with these multiple-choice questions.</p>
      <button className="btn btn-primary" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
