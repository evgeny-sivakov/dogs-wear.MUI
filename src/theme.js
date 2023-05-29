import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000A12",
    },
    secondary: {
      main: "#FFD600",
    },
    error: {
      main: red.A400,
    },
    action: {
      hover: "#263238",
      hoverOpacity: 0.4,
    },
  },
});

export default theme;
