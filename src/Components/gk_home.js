import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, Typography, Card, CardContent, Radio, RadioGroup, FormControl, FormControlLabel, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import minionGif from './minion.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  appBar: {
    marginBottom: theme.spacing(3),
  },
  question: {
    marginBottom: theme.spacing(2),
  },
  card: {
    marginTop: theme.spacing(3),
  },
}));


// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function GeneralKnowledge() {
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [celebrationGif, setCelebrationGif] = useState(null);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


  // Calculate the number of questions to retrieve based on the user's timestamp
  const timestamp = new Date().getTime();
  const lastTwoBitsSum = timestamp & 0b11; // Get the sum of the last two bits
  const questionCount = 50 + lastTwoBitsSum; // Calculate the number of questions to retrieve


  const axiosQuery=`http://localhost:3100/api/gk?level=Easy&count=${questionCount}&offset=${lastTwoBitsSum}`;
  // const axiosQuery='http://100.25.204.223:3100/api/gk?level=Easy';
  
  const handleRadioChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      let message = '';
      const choices = questions[currentQuestionIndex].choices;
      const correctAnswer = questions[currentQuestionIndex].answer;

    const selectedOptionText = choices[selectedOption].trim().toLowerCase();
    const correctAnswerText = correctAnswer.trim().toLowerCase();


      if (selectedOptionText === correctAnswerText) {
        setScore(score + 1);
        message = "Correct answer! Well done!";
        setCelebrationGif(minionGif);
      } else {
     
      // console.log(answerKey, correctAnswer);
        message = "Wrong answer! The correct answer was: " + correctAnswer;
      }
      setMessage(message);
      setSelectedOption(null);
      setShowMessage(true);
      setSubmitButtonDisabled(true)
  
      setTimeout(() => {
        setMessage('');
        setCelebrationGif(null);
        setShowMessage(false);
        setSubmitButtonDisabled(false )

        // Swap the current question with the last question in the array
      const lastQuestionIndex = questions.length - 1;
      const updatedQuestions = [...questions];
      [updatedQuestions[currentQuestionIndex], updatedQuestions[lastQuestionIndex]] = [
        updatedQuestions[lastQuestionIndex],
        updatedQuestions[currentQuestionIndex],
      ];
      updatedQuestions.pop(); // Remove the last question from the array
  
      // Randomize the order of questions
      const randomizedQuestions = shuffleArray(updatedQuestions);
      setQuestions(randomizedQuestions);
  
      // Update the current question index
      if (currentQuestionIndex < randomizedQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setCurrentQuestionIndex(-1); // All questions have been answered
      }
      }, 3000);      
    }
  };
  

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get(axiosQuery);
        const fetchedQuestions = response.data;

         // Randomize the initial order of questions
         const randomizedQuestions = shuffleArray(fetchedQuestions).map((question) => ({
          ...question,
          choices: shuffleArray(Object.values(question.choices)),
        }));

         setQuestions(randomizedQuestions);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (questions.length === 0 && currentQuestionIndex === 0) {
    // Show a loading state while fetching data
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Typography variant="h6" style={{ flexGrow: 1 }} align='right'>General Knowledge</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {questions[currentQuestionIndex].question}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={selectedOption === "" ? "" : parseInt(selectedOption)}
                    onChange={handleRadioChange}
                >
                    {Object.entries(questions[currentQuestionIndex].choices).map(([id, value]) => (

                    <FormControlLabel
                        key={id}
                        value={parseInt(id)} 
                        control={<Radio color="primary"/>}
                        label={value}
                    />
                    ))}
                </RadioGroup>
                {celebrationGif !== null && (
                    <img src={celebrationGif} alt="Celebration Gif" />
                )}
                </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleNextQuestion} disabled={submitButtonDisabled}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          {showMessage && (
            <Typography variant="h6">
              {message}
            </Typography>
          )}
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="h6">
            {`${currentQuestionIndex + 1}/${questions.length}`}
          </Typography>
        </Grid> */}
      </Grid>
    </div>
  );


  
}

export default GeneralKnowledge;