import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

function Countries() {
  const classes = useStyles();
  const [country, setCountry] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your code to fetch the answer based on the country
    // For example:
    setAnswer('The answer for ' + country + ' is 42');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Material UI Example
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Country"
            variant="outlined"
            className={classes.input}
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Get Answer
          </Button>
        </form>
        {answer && (
          <div>
            <Typography variant="h6">Answer:</Typography>
            <Typography>{answer}</Typography>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Countries;
