import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { questions } from './data/questions';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import EndScreen from './components/EndScreen';
import Sidebar from './components/Sidebar';
import QuestionPalette from './components/QuestionPalette';

function App() {
  const [gameState, setGameState] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const startQuiz = () => {
    setGameState('quiz');
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setGameState('end');
    }
  };

  const restartQuiz = () => {
    setGameState('start');
    setCurrentQuestion(0);
    setScore(0);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleQuestionSelect = (questionIndex) => {
    setCurrentQuestion(questionIndex);
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? '\u2715' : '\u2630'}
        </button>
        <div className="container">
          <h1 className="text-center my-4">Numerical Methods MCQ</h1>
          {gameState === 'start' && <StartScreen onStart={startQuiz} />}
          {gameState === 'quiz' && (
            <div className="row">
              <div className="col-md-8">
                <Question
                  question={questions[currentQuestion]}
                  onAnswer={handleAnswer}
                />
              </div>
              <div className="col-md-4">
                <QuestionPalette
                  questions={questions}
                  currentQuestion={currentQuestion}
                  onQuestionSelect={handleQuestionSelect}
                />
              </div>
            </div>
          )}
          {gameState === 'end' && (
            <EndScreen
              score={score}
              totalQuestions={questions.length}
              onRestart={restartQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;