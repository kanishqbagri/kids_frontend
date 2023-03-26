import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [response1, setResponse1] = useState('');
  const [response2, setResponse2] = useState('');

  const handleClick = async () => {
    try {
      const result1 = await axios.get('http://localhost:3000/api/puzzle1');
      const result2 = await axios.get('http://localhost:3000/api/puzzle2');
      setResponse1(result1.data);
      setResponse2(result2.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
      </header>
      <main>
        <button onClick={handleClick}>Get Puzzles</button>
        <div className="tile">{response1}</div>
        <div className="tile">{response2}</div>
      </main>
    </div>
  );
}

export default App;
