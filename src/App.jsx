import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { departments } from './data/subjects.js';
import StartScreen from './components/StartScreen';
import ModuleScreen from './components/ModuleScreen';
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
  const [questionStatus, setQuestionStatus] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [subject, setSubject] = useState('');
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    let timer;
    if (gameState === 'quiz') {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState]);

  const handleSubjectSelect = (subject) => {
    import(`./data/${subject.path}`).then(module => {
      const modules = module.default;
      setModules(modules);
      setSelectedSubject(subject);
      setGameState('module');
    });
  };

  const startQuiz = (questions, subjectName) => {
    setQuestions(questions);
    setSubject(subjectName);
    setGameState('quiz');
    setTime(0);
    setQuestionStatus(Array(questions.length).fill('not-answered'));
    setUserAnswers({});
    setScore(0);
    setCurrentQuestion(0);
    setMarkedQuestions([]);
  };

  const handleStartModule = (module) => {
    startQuiz(module.questions, selectedSubject.name);
  };

  const handleStartAllModules = () => {
    const allQuestions = modules.flatMap(module => module.questions);
    startQuiz(allQuestions, selectedSubject.name);
  };

  const handleBackToSubject = () => {
    setGameState('start');
  };

  const handleAnswer = (selectedAnswer) => {
    const newQuestionStatus = [...questionStatus];
    newQuestionStatus[currentQuestion] = 'answered';
    setQuestionStatus(newQuestionStatus);

    setUserAnswers({ ...userAnswers, [currentQuestion]: selectedAnswer });

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
    setQuestionStatus([]);
    setUserAnswers({});
    setMarkedQuestions([]);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleQuestionSelect = (questionIndex) => {
    setCurrentQuestion(questionIndex);
  };

  const handleExit = () => {
    setGameState('end');
  };

  const handleMarkForReview = (questionIndex) => {
    const newMarkedQuestions = [...markedQuestions];
    const newQuestionStatus = [...questionStatus];
    if (newMarkedQuestions.includes(questionIndex)) {
      const index = newMarkedQuestions.indexOf(questionIndex);
      newMarkedQuestions.splice(index, 1);
      if(questionStatus[questionIndex] !== 'answered') {
        newQuestionStatus[questionIndex] = 'not-answered';
      }
    } else {
      newMarkedQuestions.push(questionIndex);
      if(questionStatus[questionIndex] !== 'answered') {
        newQuestionStatus[questionIndex] = 'marked-for-review';
      }
    }
    setMarkedQuestions(newMarkedQuestions);
    setQuestionStatus(newQuestionStatus);
  };

  const goToHome = () => {
    setGameState('start');
    setSubject('');
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
          <button className="sidebar-toggle btn btn-info" onClick={toggleSidebar}>
            {isSidebarOpen ? '✕' : '☰'}
          </button>
          <h1>{subject ? `${subject} MCQ` : 'MCQ Game Portal'}</h1>
          {gameState !== 'start' && <button className="btn btn-secondary" onClick={goToHome}>Home</button>}
          {gameState === 'quiz' && <div className="timer">Time: {formatTime(time)}</div>}
        </div>

        {gameState === 'start' && <StartScreen departments={departments} onStart={handleSubjectSelect} />}
        {gameState === 'module' && (
          <ModuleScreen
            subject={selectedSubject}
            modules={modules}
            onStartModule={handleStartModule}
            onStartAll={handleStartAllModules}
            onBack={handleBackToSubject}
          />
        )}
        {gameState === 'quiz' && (
          <div className="quiz-container">
            <div className="question-area">
              <Question
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
                onMarkForReview={() => handleMarkForReview(currentQuestion)}
                isMarked={markedQuestions.includes(currentQuestion)}
              />
              <button className="btn btn-danger btn-lg mt-3" onClick={handleExit}>Exit Quiz</button>
            </div>
            <div className="right-sidebar">
              <QuestionPalette
                questions={questions}
                currentQuestion={currentQuestion}
                onQuestionSelect={handleQuestionSelect}
                questionStatus={questionStatus}
                markedQuestions={markedQuestions}
              />
            </div>
          </div>
        )}
        {gameState === 'end' && (
          <EndScreen
            score={score}
            totalQuestions={questions.length}
            onRestart={restartQuiz}
            questions={questions}
            userAnswers={userAnswers}
          />
        )}
      </div>
    </div>
  );
}

export default App;
