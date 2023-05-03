// src/theme.js
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e4b70',
    },
    secondary: {
      main: '#1c1c1c',
    },
    text: {
      primary: '#05006e',
      secondary: '#7f8c8d',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
});

export default theme;
