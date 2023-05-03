import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Navbar = () => {
  return (
    <AppBar position="static">
      <CustomToolbar>
        <CustomButton color="inherit" component={Link} to="/">
          Home
        </CustomButton>
        <CustomButton color="inherit" component={Link} to="/education">
          Education
        </CustomButton>
        <CustomButton color="inherit" component={Link} to="/coursework">
          Coursework
        </CustomButton>
        <CustomButton color="inherit" component={Link} to="/professional-experience">
          Professional Experience
        </CustomButton>
        <CustomButton color="inherit" component={Link} to="/leadership">
          Leadership
        </CustomButton>
        <CustomButton color="inherit" component={Link} to="/contact-me">
          Contact Me
        </CustomButton>
      </CustomToolbar>
    </AppBar>
  );
};

export default Navbar;
