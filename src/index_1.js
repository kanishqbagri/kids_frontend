import React, { useState } from 'react';
import axios from 'axios';

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

.App {
    text-align: center;
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
  
  .tile {
    width: 300px;
    height: 200px;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: #333333;
  }
  
export default App;
