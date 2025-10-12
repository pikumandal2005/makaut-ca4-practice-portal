
import React from 'react';

const EndScreen = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="score-card">
      <h2 className="mb-4">Quiz Completed!</h2>
      <p className="mb-4">
        Your score: {score} / {totalQuestions}
      </p>
      <button className="btn btn-primary" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
};

export default EndScreen;
