import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from '../Nav';

const useStyles = makeStyles(theme => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}))

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgb(7, 126, 136)',
    },
    '& label': {
      color: 'rgb(138, 145, 150)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(138, 145, 150)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(7, 126, 136)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(7, 126, 136)',
      },
    },
  },
})(TextField);

const Contact = () => {
  return (
    <>
        <Navbar />
        <br/>
        <Box component="div">
          <Grid container justify="center">
            <Box component="form">
              <Typography style={{ color: "rgb(7, 126, 136)" }} variant="h5">
                I can't wait to hear from you...
              </Typography>
              <br/>
              <InputField 
                fullWidth={true} 
                label="Name" 
                variant="outlined" 
                inputProps={{style: { color: "rgb(117, 75, 111"}}} 
                margin="dense" 
                size="medium"
              /><br/>
              <InputField 
                fullWidth={true} 
                label="Company Name" 
                variant="outlined" 
                inputProps={{style: { color: "rgb(117, 75, 111"}}} 
                margin="dense" 
                size="medium"
              />
                <InputField 
                fullWidth={true} 
                label="Email" 
                variant="outlined" 
                inputProps={{style: { color: "rgb(117, 75, 111"}}} 
                margin="dense" 
                size="medium"
              /><br/>
              <Button variant="outlined" fullwidth={true} endIcon={<SendIcon /> } >
                contact me
              </Button>
            </Box>
          </Grid>
        </Box>
    </>
  );
};

export default Contact;
