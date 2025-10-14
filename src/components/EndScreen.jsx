
import React, { useState } from 'react';

const EndScreen = ({ score, totalQuestions, onRestart, questions, userAnswers }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="score-card">
      <h2 className="mb-4">Quiz Completed!</h2>
      <p className="mb-4">
        Your score: {score} / {totalQuestions}
      </p>
      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-primary btn-lg" onClick={onRestart}>
          Play Again
        </button>
        <button className="btn btn-info btn-lg" onClick={() => setShowAnswers(!showAnswers)}>
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>
      </div>

      {showAnswers && (
        <div className="answer-review mt-4">
          <h3>Review Your Answers</h3>
          <ul className="list-group">
            {questions.map((question, index) => (
              <li key={index} className="list-group-item">
                <p><strong>Question:</strong> {question.text}</p>
                <p><strong>Your Answer:</strong> <span style={{ color: userAnswers[index] === question.correctAnswer ? 'green' : 'red' }}>{userAnswers[index] || 'Not Answered'}</span></p>
                <p><strong>Correct Answer:</strong> <span style={{ color: 'green' }}>{question.correctAnswer}</span></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EndScreen;
