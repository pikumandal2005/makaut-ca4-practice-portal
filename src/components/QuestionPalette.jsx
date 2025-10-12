
import React from 'react';

const QuestionPalette = ({ questions, currentQuestion, onQuestionSelect }) => {
  return (
    <div className="question-palette">
      <h5>Question Palette</h5>
      <div className="d-flex flex-wrap">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`btn ${index === currentQuestion ? 'btn-primary' : 'btn-outline-secondary'} m-1`}
            onClick={() => onQuestionSelect(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionPalette;
