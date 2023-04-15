import React from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(3),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

function Page1() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Kids Website</Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
        <Link to="/quiz-app">
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/featured/?kids"
              title="Kids Playing"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Quiz App
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Puzzles for your Brain
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <Link to="/countries">
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/featured/?toys"
              title="Kids Toys"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Countries / Caiptals
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Whats the Capital of Brazil?
              </Typography>
            </CardContent>
          </Card>
        </Link>
        </Grid>

        {/* <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/featured/?books"
              title="Kids Books"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Which book do you like?
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Is Calvin naughtier than Dennis?
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/featured/?food"
              title="Kids Food"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Treats
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Do you have anything with Sugar?
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Page1;
