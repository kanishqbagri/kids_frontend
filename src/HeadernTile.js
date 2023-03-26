import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './calvin.jpg';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px', // Add this line
  },
}));


function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Puzzle your Brain</Typography>
        <Typography variant="subtitle1">Welcome, Ved</Typography>
        {/* <img src={logo} alt="Logo" className="logo" /> */}
      </Toolbar>
    </AppBar>
  );
}

const useStylesTile = makeStyles((theme) => ({
  tile: {
    margin: '60px auto 0',
    maxWidth: 200,
    maxHeight: 200,
    padding: theme.spacing(1),
  },
}));

function Tile() {
  const classes = useStylesTile();

  return (
    <div className={classes.tile}>

    </div>
  );
}




function ButtonGenerate() {

    const [cardData, setCardData] = useState(null);

  const handleButtonClick = () => {
    // Generate some data for the tile
    const data = {
        title: 'My Card',
        description: 'This is my card description.',
      };

    // Set the data for the tile
    setCardData(data);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Generate
      </Button>
      {cardData && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {cardData.title}
            </Typography>
            <Typography color="textSecondary">
              {cardData.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
export {Header, Tile, ButtonGenerate};


