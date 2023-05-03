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

const leadershipExperiences = [
  {
    organization: 'Dartmouth Investment and Philanthropy Program',
    location: 'Hanover, NH',
    period: 'March 2021 – Present',
    title: 'Summer President & Investment Committee Member',
    description: [
      'Lead teams of 5-9 in conducting fundamental analysis and financial valuation for stock pitches for a total portfolio of $700k.',
      'Organize alumni speaker series, philanthropy donations, media outreach, and budget funding for social initiatives.',
      'Spearhead discussion on potential portfolio decisions and provide final approval for investments.',
      'Conducted weekly research reports on the TMT Industry and select companies within the portfolio.',
    ],
  },
  {
    organization: 'Dartmouth and Tuck Real Estate Investment Fund',
    location: 'Hanover, NH',
    period: 'March 2021 – November 2021',
    title: 'Co-Founder and Intercollegiate Team Leader',
    description: [
      'Co-founded a $500,000 real estate investment fund at Dartmouth with Tuck students.',
      'Led a team to actively network with other universities’ funds to develop fund infrastructure.',
      'Strategized with fund formation team to ensure the fund is established in a manner that does not obstruct college policies.',
    ],
  },
  // Add more leadership experiences here if needed
];

const Leadership = () => {
  return (
    <StyledContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Leadership
      </Typography>
      {leadershipExperiences.map((experience, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6" gutterBottom>
            {experience.organization}, {experience.location}
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

export default Leadership;
