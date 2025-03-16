import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 500,
    },
    button: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap');
      `,
    },
  },
});

export default theme; 