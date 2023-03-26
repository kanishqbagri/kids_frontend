import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './calvin.jpg';

const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Puzzle your Brain</Typography>
        <Typography variant="subtitle1">Welcome, John</Typography>
        <h1></h1>
      <img src={logo} alt="Logo" className="logo" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
