import MainNavigation from "./MainNavigation";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import logo from "../assets/img/logo.svg";
import logopng from "../assets/img/logopng.png";
import { Box } from "@mui/material";

const MENU_SECTIONS = [
  { title: "Catalog", url: "#" },
  { title: "About", url: "#" },
  { title: "Sizes", url: "#" },
  { title: "Shipping", url: "#" },
  { title: "Contact us", url: "#" },
];

const Header = () => {
  return (
    <Box
      component="div"
      sx={{ display: "flex", justifyContent: "start", gap: 7, pt: 6 }}
    >
      <img src={logo} />
      <MainNavigation sections={MENU_SECTIONS} />
      <SearchSharpIcon sx={{ ml: 'auto' }} />
    </Box>
  );
};

export default Header;
