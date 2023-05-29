import { Box, Container, IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contacts() {
  return (
    <Container
      component="div"
      sx={{
        display: "flex",
        gap: 5,
        justifyContent: "start",
        pt: 5.5,
        pb: 7.5,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography component="h4" variant="h6">
          Info
        </Typography>
        <Link href="#" variant="body1">
          Measurement's Table
        </Link>
        <Link href="#" variant="body1">
          Cooperation
        </Link>
        <Link href="#" variant="body1">
          Orders and Returns
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography component="h4" variant="h6">
          Contact Us
        </Typography>
        <Link href="tel:+48515443702">
          <Typography variant="body1">Phone: +48515443702</Typography>
        </Link>
        <Link href="#">
          <Typography variant="body1">WhatsApp: @hunting_pony</Typography>
        </Link>
        <Link href="mailto: hunting_pony@happy.dog">
          <Typography variant="body1">
            E-mail: hunting_pony@happy.dog
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography component="h4" variant="h6">
          Social
        </Typography>
        <Box sx={{ ml: -1 }}>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "400px", ml: "auto" }}>
        <Typography component="p" variant="body2">
          The brand was developed in the Republic of Neverland IE Krauze DA
          Certificate of registration Anywhere District Executive Committee from
          08.01.2015 in the Unified State Register of legal entities and
          individual entrepreneurs № 433257711 Registration in the Commercial
          Register of the Republic of Neverland dated May 07, 2018 number 414454
          Mode of operation: Mon-Fri from 10:00 to 21:00
        </Typography>
      </Box>
    </Container>
  );
}

export default Contacts;
