import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#000A12',
    },
    secondary: {
      main: '#FFD600',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
