
import React, { useState } from 'react';

const Question = ({ question, onAnswer, onMarkForReview, isMarked }) => {
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
      <div className="d-flex justify-content-center gap-2 mt-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={handleAnswer}
          disabled={!selectedOption}
        >
          Save & Next
        </button>
        <button
          className={`btn btn-warning btn-lg`}
          onClick={onMarkForReview}
        >
          {isMarked ? 'Unmark' : 'Mark for Review'}
        </button>
      </div>
    </div>
  );
};

export default Question;
