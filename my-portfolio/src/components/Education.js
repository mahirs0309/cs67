import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import dartmouthImage from '../assets/dartmouth.jpg';
import franklinHighSchoolImage from '../assets/fhs.jpeg';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Education = () => {
  return (
    <StyledContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Education
      </Typography>

      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Typography variant="h5" color="textPrimary">Dartmouth College, Hanover, NH</Typography>
          <Typography variant="h6" color="textPrimary">June 2024</Typography>
          <Typography variant="body1">
            Bachelor of Arts, Double Major in Computer Science and Mathematics
          </Typography>
          <Typography variant="body2" color="textPrimary" paragraph>
            Dartmouth College is a private Ivy League research university located in Hanover, New
            Hampshire, United States. It was founded in 1769 and is one of the oldest and most
            prestigious institutions of higher education in the United States. Dartmouth is known
            for its undergraduate liberal arts program, as well as its graduate programs in
            business, engineering, medicine, and more. The college has a student body of
            approximately 6,000 and a faculty of over 700, and its campus covers over 269 acres in
            the scenic Upper Valley region of New Hampshire. Dartmouth is consistently ranked among
            the top colleges and universities in the United States.
          </Typography>
        </Grid>
        <Grid item xs={4}>
            <img src={dartmouthImage}
            alt="Dartmouth College" 
            style={{ width: '600px', height: '400px', objectFit: 'cover' }}
            />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h5" color="textPrimary">Franklin High School, Somerset, NJ</Typography>
          <Typography variant="h6" color="textPrimary">June 2020</Typography>
          <Typography variant="body1">
            High School Diploma
          </Typography>
          <Typography variant="body2" color="textPrimary" paragraph>
            Franklin High School is a public high school located in Somerset, New Jersey. The
            school's mission statement emphasizes the importance of diversity and innovation in
            education, with a focus on empowering all students to achieve their full potential.
            With a culturally diverse student body, Franklin High School is committed to providing
            an inclusive and welcoming environment for all students. The school offers a range of
            academic and extracurricular programs, including honors and Advanced Placement courses,
            as well as a variety of sports teams and clubs. Franklin High School is dedicated to
            preparing its students for success in college and beyond, and is known for its
            commitment to academic excellence and community engagement.
          </Typography>
        </Grid>
        <Grid item xs={4}>
            <img 
            src={franklinHighSchoolImage} 
            alt="Franklin High School" 
            style={{ width: '600px', height: '400px', objectFit: 'cover' }}
            />
            
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Education;
