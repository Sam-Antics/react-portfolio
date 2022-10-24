import React from 'react'
import {
  Typography,
  Avatar,
  Grid,
  Box
} from '@material-ui/core';
import avatar from "../../assets/images/sam-avatar.png";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Sam's Avatar" />
    </Box>
  )
}

export default Header