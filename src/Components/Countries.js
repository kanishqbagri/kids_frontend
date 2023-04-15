import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, TextField, Button, Typography } from '@material-ui/core';
import Papa from 'papaparse';

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
  const [country, setCountry] = useState(null);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    Papa.parse('./Capitals.csv', {
      download: true,
      header: true,
      complete: (results) => {
        console.log('Parsed data:', results.data);
        setCountries(results.data);
        setCountry(results.data[Math.floor(Math.random() * results.data.length)]);
      },
      error: (err) => {
        console.log('Error parsing CSV:', err);
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCountry = countries.find((item) => item.country === country.country);
    if (!selectedCountry) {
      setMessage('Error: Invalid country selected');
      return;
    }
    const correct = answer.toLowerCase() === selectedCountry.capital.toLowerCase();
    if (correct) {
      setMessage('Correct!');
    } else {
      setMessage(
        `Incorrect. The capital of ${selectedCountry.country} is ${selectedCountry.capital}.`
      );
    }
  };

  const handleNext = () => {
    setCountry(countries[Math.floor(Math.random() * countries.length)]);
    setAnswer('');
    setMessage('');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Countries and Capitals</Typography>
        </Toolbar>
      </AppBar>
      {country && (
        <Typography variant="h6" gutterBottom>
          What is the capital of {country.country}?
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
      <Button onClick={handleNext} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
}

export default Countries;
