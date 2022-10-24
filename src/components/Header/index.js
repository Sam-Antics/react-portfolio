import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Avatar,
  Grid,
  Box
} from '@material-ui/core';
import Typed from 'react-typed';
import profilePic from "../../assets/images/Profile2.jpg";

// CSS STYLES
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "rgb(7, 126, 136)"
  },
  subtitle: {
    color: "rgb(122, 138, 151)",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign:"center",
    zIndex: 1
  }
}));

const Header = () => {
  const classes = useStyles()

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
      <Avatar className={classes.avatar} src={profilePic} alt="Sam's Avatar" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Samantha Guerra"]} typeSpeed={15} />
      </Typography>
      <br/>
      <Typography className={classes.subtitle} variant="h5">
        <Typed 
        strings={["Web Design", "Web Development", "MERN Stack", "MySQL"]} 
        typeSpeed={40} 
        backSpeed={16}
        loop
        />
      </Typography>
    </Box>
  )
}

export default Header