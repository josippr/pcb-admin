import { createTheme } from '@mui/material/styles';

// Define your light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#131A26',
    },
    secondary: {
      main: '#6C96EA',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default lightTheme;
