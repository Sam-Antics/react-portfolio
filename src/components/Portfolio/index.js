import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import Navbar from '../Nav';
import reachTeach from "../../assets/images/reach-teach-ss.png";
import petPortal from "../../assets/images/pet-portal.png";
import stayTripn from "../../assets/images/stay-tripn.png";
import weatherApp from "../../assets/images/weather-app.png";
import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  mainContainer: {
    background: "rgb(7, 126, 136)",
    height: "100%",
  },
  cardContainer: {
    background: "rgb(122, 80, 150)",
    color: "rgb(40, 20, 48)",
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem auto"
  }
})

const Portfolio = () => {
  const classes = useStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" alignItems="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ReachTeach Messenger"
                height="140"
                image={reachTeach}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  ReachTeach Messenger
                </Typography>
                <Typography variant="body2" style={{color: "rgb(138, 145, 150)"}} component="p">
                  Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" style={{color: "rgb(7, 126, 136)"}}>
                  share
                </Button>
                <Button size="small" style={{color: "rgb(7, 126, 136)"}}>
                  live demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
         {/* Project 2 */}
         <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Pet Portal CMS"
                height="140"
                image={petPortal}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Pet Portal CMS
                </Typography>
                <Typography variant="body2" style={{color: "rgb(138, 145, 150)"}} component="p">
                  Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" style={{color: "rgb(7, 126, 136)"}}>
                  share
                </Button>
                <Button size="small" style={{color: "rgb(7, 126, 136)"}}>
                  live demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Stay Tripin' Travel Dashboard"
                height="140"
                image={stayTripn}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Stay Tripin'
                </Typography>
                <Typography variant="body2" style={{color: "rgb(138, 145, 150)"}} component="p">
                  Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" style={{color: "rgb(7, 126, 136)"}}>
                  share
                </Button>
                <Button size="small" style={{color: "rgb(7, 126, 136)"}}>
                  live demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Weather App"
                height="140"
                image={weatherApp}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Weather App Dashboard
                </Typography>
                <Typography variant="body2" style={{color: "rgb(138, 145, 150)"}} component="p">
                  Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" style={{color: "rgb(7, 126, 136)"}}>
                  share
                </Button>
                <Button size="small" style={{color: "rgb(7, 126, 136)"}}>
                  live demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
