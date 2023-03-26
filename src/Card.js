import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStylesTile = makeStyles((theme) => ({
  tile: {
    margin: '60px auto 0',
    maxWidth: 600,
    padding: theme.spacing(3),
  },
}));

function Tile1() {
  const classes = useStylesTile();

  return (
  <div>
    <Card className={classes.root}>
      {/* <CardMedia
        className={classes.media}
        image="./calvin.jpg"
        title="Calvin and Hobbes"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        A cowboy rode into town on Friday. He stayed in town for three days and rode out on Friday. How is that possible?
        </Typography>
        
      </CardContent>
      <Card>
      </Card>
    </Card>
    <Card className={classes.root} variant="h5" component="h2">
    <CardContent>
         
          <Typography variant="h5" component="h2">
            The horse's name was Friday
          </Typography>
        </CardContent>
    </Card>
    
    </div>
  );
}

export default Tile1;
