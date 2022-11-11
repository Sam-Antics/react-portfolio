import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import email from "../../assets/images/icons8-email-40.png";
import github from "../../assets/images/icons8-github-40.png";
import linkedin from "../../assets/images/icons8-linkedin-40.png";

const useStyles = makeStyles ({
  root: {
    "&.MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
  },
  bottomRoot: {
    "&.MuiBottomNavigation-root" : {
      height: 75,
      width: "auto",
      background: "rgb(40, 20, 48)"
    }
  }
})

const Footer = () => {

  const classes = useStyles()
  
  return (
    <BottomNavigation className={classes.bottomRoot} >
      <BottomNavigationAction className={classes.root} label="Email" icon={<img src={email} />} />
      <BottomNavigationAction label="GitHub" icon={<img src={github} />} />
      <BottomNavigationAction label="LinkedIn" icon={<img src={linkedin} />} />
    </BottomNavigation>
  )
}

export default Footer