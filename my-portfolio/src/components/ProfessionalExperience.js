import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StyledList = styled('ul')({
  listStyleType: 'disc',
  paddingLeft: '1.5em',
  margin: 0,
});

const experiences = [
    {
      company: 'Amazon',
      location: 'Palo Alto, CA',
      title: 'Incoming Software Engineer Intern',
      period: 'TBD June 2022 – Present',
      description: [],
    },
    {
      company: 'FanDuel',
      location: 'New York City, NY',
      title: 'Software Engineer Intern',
      period: 'March 2022 – June 2022',
      description: [
        'Collaborate with Engineers and Product Managers on a team responsible for handling all the APIs and Feeds that power the Fantasy experience.',
        'Java and Python to improve and reconfigure backend systems which are used to power any data driven interaction within all features of FanDuel’s Daily Fantasy Sports product offerings.',
      ],
    },
    {
      company: 'VCTI',
      location: 'Somerset, NJ',
      title: 'Software Engineer Intern',
      period: 'January 2022 – March 2022',
      description: [
        'Developed web-scraping software tool using Selenium & Python to collect data from broadband service providers.',
        'Worked alongside engineers using OpenCV to develop ML based software to solve basic image based reCAPTCHA’s.',
      ],
    },
    {
      company: 'Landmark Ventures',
      location: 'New York City, NY',
      title: 'Investment Banking Analyst Intern',
      period: 'January 2022 – March 2022',
      description: [
        'Supported analysts in providing strategic advisory to C-level executives at technology firms looking to pursue M&A or other capital raising transactions in e-commerce, enterprise SaaS and cybersecurity, and HR / marketing technology.',
        'Conducted DCF & Precedent Transactions analyses and refined investor materials for clients across 6 deal processes.',
        'Initiated campaign and sourced 350+ potential clients, resulting in 15+ qualified leads.',
      ],
    },
  ];

const ProfessionalExperience = () => {
  return (
    <StyledContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Professional Experience
      </Typography>
      {experiences.map((experience, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6" gutterBottom>
            {experience.company}, {experience.location}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {experience.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {experience.period}
          </Typography>
          <StyledList>
            {experience.description.map((desc, idx) => (
              <li key={idx}>
                <Typography variant="body1" paragraph>
                  {desc}
                </Typography>
              </li>
            ))}
          </StyledList>
        </Box>
      ))}
    </StyledContainer>
  );
};

export default ProfessionalExperience;
