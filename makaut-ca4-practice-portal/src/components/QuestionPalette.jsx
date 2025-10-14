
import React, { useState } from 'react';

const QuestionPalette = ({ questions, currentQuestion, onQuestionSelect, questionStatus, markedQuestions }) => {
  const [showOnlyMarked, setShowOnlyMarked] = useState(false);

  const getStatusClass = (index) => {
    if (index === currentQuestion) {
      return 'current';
    }
    if (markedQuestions.includes(index)) {
      return 'marked';
    }
    return questionStatus[index];
  };

  const filteredQuestions = showOnlyMarked ? questions.filter((_, index) => markedQuestions.includes(index)) : questions;

  return (
    <div className="question-palette">
      <h5>Question Palette</h5>
      <button className="btn btn-warning btn-sm mb-2" onClick={() => setShowOnlyMarked(!showOnlyMarked)}>
        {showOnlyMarked ? 'Show All' : 'Review'}
      </button>
      <div className="palette-grid">
        {filteredQuestions.map((_, index) => {
          const originalIndex = questions.indexOf(_);
          return (
            <button
              key={originalIndex}
              className={`palette-item ${getStatusClass(originalIndex)}`}
              onClick={() => onQuestionSelect(originalIndex)}
            >
              {originalIndex + 1}
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
