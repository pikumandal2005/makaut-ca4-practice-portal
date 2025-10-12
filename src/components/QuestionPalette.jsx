
import React from 'react';

const QuestionPalette = ({ questions, currentQuestion, onQuestionSelect, questionStatus }) => {
  return (
    <div className="question-palette">
      <h5>Question Palette</h5>
      <div className="palette-grid">
        {questions.map((_, index) => {
          const status = questionStatus[index];
          let statusClass = '';
          if (index === currentQuestion) {
            statusClass = 'current';
          } else if (status === 'answered') {
            statusClass = 'answered';
          } else {
            statusClass = 'not-answered';
          }

          return (
            <button
              key={index}
              className={`palette-item ${statusClass}`}
              onClick={() => onQuestionSelect(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="palette-legend mt-3">
        <div><span className="legend-box not-answered"></span> Not Answered</div>
        <div><span className="legend-box answered"></span> Answered</div>
        <div><span className="legend-box marked"></span> Marked for Review</div>
        <div><span className="legend-box current-legend"></span> Current</div>
      </div>
    </div>
  );
};

export default QuestionPalette;

