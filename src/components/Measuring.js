import { Box, Button, Container, Typography } from "@mui/material";
import measureDog from "../assets/img/measureDog.svg";

function Measuring() {
  return (
    <Container
      disableGutters
      component="div"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 7,
        paddingY: 5.5,
      }}
    >
      <Box component="div">
        <img
          src={measureDog}
          alt="icon showing a dog and a measuring above it"
        />
      </Box>
      <Typography>
        You can order clothes selecting one of the sizes, or we will make them
        according to your dog's individual dimensions.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        How to measure
      </Button>
    </Container>
  );
}

export default Measuring;
