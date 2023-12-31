import { createTheme } from '@mui/material/styles';

// Define your light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light', // Use light mode
    primary: {
      main: '#FFFFFF', // Set the main color for primary
    },
    secondary: {
      main: '#6C96EA', // Set the main color for secondary
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Adjust the font family as needed
  },
});

export default lightTheme;

