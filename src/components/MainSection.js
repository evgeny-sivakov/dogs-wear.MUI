import { Box, Typography } from "@mui/material";
import mainDog from "../assets/img/dog.jpg";

function MainSection() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", pt: 4, pb: 10 }}>
      <Typography component="h1" variant="h3">
        Сomfortable accessories for your dogs
      </Typography>
      <img
        src={mainDog}
        alt="A photo of cute Jack Russell Terrier in Yellow raincoat, sitting and looking forward"
      />
    </Box>
  );
}

export default MainSection;
