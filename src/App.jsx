
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { questions } from './data/questions';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import EndScreen from './components/EndScreen';

function App() {
  const [gameState, setGameState] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

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

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center my-4">Numerical Methods MCQ</h1>
        {gameState === 'start' && <StartScreen onStart={startQuiz} />}
        {gameState === 'quiz' && (
          <Question
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
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
