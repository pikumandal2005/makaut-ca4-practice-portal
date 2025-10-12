
import React from 'react';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      <h3 className="mb-4">{question.text}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="btn btn-outline-primary"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
