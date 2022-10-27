import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Typography,
  Box
} from '@material-ui/core'

// components
import Navbar from '../Nav'
import { ClassSharp, LineWeight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "rgb(7, 126, 136)"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid rgb(122, 138, 151)",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]:{
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid rgb(122, 138, 151)",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "rgb(122, 80, 150) rgb(122, 80, 150) transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "rgb(122, 138, 151)"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "0.625rem",
        borderColor: "transparent transparent rgb(122, 80, 150) rgb(122, 80, 150)"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "rgb(122, 80, 150)",
    color: "rgb(40, 20, 48)",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "rgb(122, 138, 151)",
    textShadow: "0 0 1px rgb(122, 80, 150), 0 0 1px rgb(122, 80, 150), 0 0 1px rgb(122, 80, 150), 0 0 1px rgb(122, 80, 150)",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "rgb(7, 126, 136)",
    textShadow: "0 0 1px rgb(88, 19, 129), 0 0 1px rgb(88, 19, 129), 0 0 1px rgb(88, 19, 129), 0 0 1px rgb(88, 19, 129)",
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography className={classes.heading} variant="h4" align="center">
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2007
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography className={classes.subHeading} variant="h5" align="center">
              sales administration
            </Typography>
            <Typography style={{color: "rgb(88, 19, 129)"}} variant="body1" align="center">
              Bates Security
            </Typography>
            <Typography style={{color: "rgb(40, 20, 48)"}} variant="subtitle1" align="center">
              Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum.
            </Typography>
          </Box>
          <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2016
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography className={classes.subHeading} variant="h5" align="center">
              english language editor
            </Typography>
            <Typography style={{color: "rgb(88, 19, 129)"}} variant="body1" align="center">
              3Play Media
            </Typography>
            <Typography style={{color: "rgb(40, 20, 48)"}} variant="subtitle1" align="center">
              Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum.
            </Typography>
          </Box>
        </Box>
      </Box>
        
    </>
  )
}

export default Resume