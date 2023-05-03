import React from 'react';
import { Typography, Container, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/system';
import profileImage from '../assets/profile.jpg';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginBottom: theme.spacing(2),
}));

const Home = () => {
  return (
    <StyledContainer>
      <Grid container justifyContent="center" alignItems="center" direction="column">
        <Grid item>
          <ProfileAvatar alt="Profile Image" src={profileImage} />
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Hi, I'm Mahir Singh
          </Typography>
          <Typography variant="h6" align="center" color="black" gutterBottom>
            Engineer &amp; Student
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body1" align="center" paragraph>
        Welcome to my personal portfolio website! I am a passionate engineer and student, constantly
        learning and developing my skills. Here, you can learn more about my education, coursework,
        professional experience, and leadership roles.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Please feel free to explore the site and get in touch with me if you have any questions or
        opportunities you'd like to discuss.
      </Typography>
    </StyledContainer>
  );
};

export default Home;
