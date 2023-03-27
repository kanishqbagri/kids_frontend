import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/puzzles');
     
      if (response.data.length > 0) {
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomPuzzle = response.data[randomIndex];
      
        setQuestion(randomPuzzle.Question);
        setAnswer(randomPuzzle.Answer);
        setShowAnswer(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerClick = () => {
    setShowAnswer(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>
      <main>
        <button onClick={handleClick}>Get Question</button>
        <div>
          <h2>Question:</h2>
          <p>{question}</p>
        </div>
        <div>
          <button onClick={handleAnswerClick}>Show Answer</button>
          {showAnswer && (
            <>
              <h2>Answer:</h2>
              <p>{answer}</p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}


export default App;
