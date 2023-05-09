import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Coursework from './components/Coursework';
import ProfessionalExperience from './components/ProfessionalExperience';
import Leadership from './components/Leadership';
import ContactMe from './components/ContactMe';


const theme = createTheme({
  palette: {
    primary: {
      main: '#0a192f',
    },
    secondary: {
      main: '#64ffda',
    },
    text: {
      primary: '#8892b0',
      secondary: '#ccd6f6',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/cs67">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/coursework" element={<Coursework />} />
          <Route path="/professional-experience" element={<ProfessionalExperience />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </Router>
    </ThemeProvider>
// ...
  );
}

export default App;
