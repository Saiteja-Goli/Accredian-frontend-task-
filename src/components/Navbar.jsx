import { Box, Button, Link } from '@mui/material';
import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <Box className='navbar'>
      <Box className='navbar-left'>
        <img src='https://accredian.com/Rcimages/logo.png' alt='Logo' />
        <Box>
          <Button variant="contained">Courses</Button>
        </Box>
      </Box>
      <Box className='navbar-right'>
        <Box>
          <Link href="#" underline="none" sx={links}>Refer & Earn</Link>
        </Box>
        <Box>
          <Link href="#" underline="none" sx={links}>Resources</Link>
        </Box>
        <Box>
          <Link href="#" underline="none" sx={links}>About Us</Link>
        </Box>
        <Box>
          <Button  sx={button1}>Login</Button>
        </Box>
        <Box>
          <Button variant="contained" sx={button2}>Try for free</Button>
        </Box>
      </Box>
    </Box>
  );
}

const links = {
  color: 'black',
  width: "87px",
  height: '24px'
}

const button1 = {
    color:'black',
  height: '40px',
  width:'77px',
  backgroundColor:"grey.300"
}
const button2 = {
    height: '40px',
    with:'115px'

  }

export default Navbar;
