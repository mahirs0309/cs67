import React from 'react';
import { Typography, Container, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
  };

  return (
    <StyledContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Email: mahir.singh.24@dartmouth.edu
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Phone: 732 890 5950
      </Typography>

      <Box component="form" onSubmit={handleSubmit} mt={4}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Subject"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default ContactMe;
