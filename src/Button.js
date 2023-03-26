import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';


function Button1() {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={getData}>
        Generate
      </Button>
    </div>
  );
}


async function getData() {
  // const response = await axios.get('http://localhost:3100/api/puzzles)

  const response = await axios.get('http://localhost:3100/api/puzzles')
  .then(response => {
    // Handle the response data
    updateUI(response.data);
  })
  .catch(error => {
    console.error(error);
  });

  const data = response.data;

  // Update UI with data
  // updateUI(data);
}

function updateUI(data) {
  // const questionElement = document.querySelector('.tile');
  const tileElement = document.querySelector('.tile');
  const tileContentElement = tileElement.querySelector('#tile-content');
  tileContentElement.textContent = data.content;


  // const answerElement = document.getElementById('Answer');

  // questionElement.textContent = data.question;
  // answerElement.textContent = data.answer;
}

export default Button1;
