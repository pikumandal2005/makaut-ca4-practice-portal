import React, { useState, useEffect } from 'react';
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
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (gameState === 'quiz') {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState]);

  const startQuiz = () => {
    setGameState('quiz');
    setTime(0);
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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="header">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? '✕' : '☰'}
          </button>
          <h1>Numerical Methods MCQ</h1>
          {gameState === 'quiz' && <div className="timer">Time: {formatTime(time)}</div>}
        </div>

        {gameState === 'start' && <StartScreen onStart={startQuiz} />}
        {gameState === 'quiz' && (
          <div className="quiz-container">
            <div className="question-area">
              <Question
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </div>
            <div className="right-sidebar">
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
  );
}

export default App;