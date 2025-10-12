
import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = () => {
    onAnswer(selectedOption);
    setSelectedOption(null);
  };

  return (
    <div className="question-card">
      <h4 className="mb-4">{question.text}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <div key={index} className="form-check mb-2">
            <input
              className="form-check-input"
              type="radio"
              name={`question-${question.id}`}
              id={`option-${index}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            <label className="form-check-label" htmlFor={`option-${index}`}>
              {option}
            </label>
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary mt-4"
        onClick={handleAnswer}
        disabled={!selectedOption}
      >
        Save & Next
      </button>
    </div>
  );
};

export default Question;
