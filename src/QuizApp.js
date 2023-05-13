import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizApp.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    padding: "20px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  question: {
    textAlign: "left",
    fontSize: "24px",
    backgroundColor: "#f2f2f2",
    width: "60%",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "10px"
  },
  answer: {
    textAlign: "left",
    fontSize: "24px",
    backgroundColor: "#f2f2f2",
    width: "60%",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "10px"
  },
}));

function QuizApp() {
  const classes = useStyles();

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    async function fetchPuzzle() {
      try {
        const response = await axios.get('http://localhost:3100/api/puzzles');
        // const response = await axios.get('http://100.25.204.223:3100/api/puzzles');

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
    }

    fetchPuzzle();
  }, []);

  const handleClick = async () => {
    try {
      const response = await axios.get('http://100.25.204.223:3100/api/puzzles');

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
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Typography variant="h6" style={{ flexGrow: 1 }} align='right'>Riddles</Typography>
        </Toolbar>
      </AppBar>
      <Grid container direction="column" alignItems="center" spacing={3}>
        {/* <Grid item>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Get Question
          </Button>
        </Grid> */}
        <Grid item>
          {/* <Typography>Question:</Typography> */}
          <Typography variant="h6" align="left" backgroundColor= "#f2f2f2"><b>Question:</b> {question}</Typography>
        </Grid>
        {showAnswer && (
          <Grid item>
            {/* <Typography>Answer:</Typography> */}
            <Typography variant="h6" align="left" backgroundColor= "#f2f2f2"><b>Answer:</b> {answer}</Typography>
          </Grid>
        )}
        {showAnswer ? null : (
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleAnswerClick}>
              Show Answer
            </Button>
          </Grid>
        )}
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Next Question
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default QuizApp;
