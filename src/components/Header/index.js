import React from 'react'
import {
  Typography,
  Avatar,
  Grid,
  Box
} from '@material-ui/core';
import Typed from 'react-typed';
import avatar from "../../assets/images/sam-avatar.png";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Sam's Avatar" />
      <Typography variant="h4">
        <Typed strings={["Samantha Guerra"]} typeSpeed={40} />
      </Typography>
      <br/>
      <Typography variant="h5">
        <Typed 
        strings={["Web Design", "Web Development", "MERN Stack"]} 
        typeSpeed={40} 
        backSpeed={16}
        loop
        />
      </Typography>
    </Box>
  )
}

export default Header