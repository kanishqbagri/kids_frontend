import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, TextField, Button, Typography } from '@material-ui/core';
import Papa from 'papaparse';
import capitalsCsv from './data/capitals.csv';
import Confetti from 'react-confetti';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  appBar: {
    marginBottom: theme.spacing(3),
  },
}));

function Countries() {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);
  const [country1, setCountry] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false); // add this line

  useEffect(() => {
    console.log('Country value:', country1);

    fetch(capitalsCsv)
      .then((response) => response.text())
      .then((csvString) => {
        Papa.parse(csvString, {
          header: true,
          complete: (results) => {
            console.log('Parsed data:', results.data);
            if (results.data.length > 0) {
              const randomCountry = results.data[Math.floor(Math.random() * results.data.length)];
              console.log('Random country:', randomCountry.Country);
              console.log('Random country:', randomCountry.Capital);
              setCountry(randomCountry.Country);
              // setAnswer(randomCountry.Capital);
            }
            setCountries(results.data);
          },
          error: (err) => {
            console.log('Error parsing CSV:', err);
          },
        });
      })
      .catch((err) => {
        console.log('Error fetching CSV:', err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCountry = countries.find((item) => item.Country === country1);
    if (!selectedCountry) {
      setMessage('Error: Invalid country selected');
      return;
    }
    const correct = answer.toLowerCase() === selectedCountry.Capital.toLowerCase();
    if (correct) {
      setMessage('Correct!');
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    } else {
      setMessage(
        <><b>Incorrect.</b> The capital of {selectedCountry.Country} is {selectedCountry.Capital}.</>
      );
    }
  };
  
  

  const handleNext = () => {
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    setCountry(randomCountry.Country);
    setAnswer('');
    setMessage('');
    setShowConfetti(false);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Countries and Capitals</Typography>
        </Toolbar>
      </AppBar>
      {country1 && (
        <Typography variant="h6" gutterBottom>
          What is the capital of {country1}?
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={6} alignItems="center">
          <Grid item className={classes.textField}>
            <TextField
              label="Answer"
              variant="outlined"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {message && (
        <Typography variant="h6" gutterBottom>
          {message}
        </Typography>
      )}
      {showConfetti && <Confetti />}
      <Button onClick={handleNext} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );  
}

export default Countries;
