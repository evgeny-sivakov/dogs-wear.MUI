import { Container, Grid, Typography, Paper } from "@mui/material";

function About() {
  return (
    <Container
      sx={{
        backgroundColor: "#000A12",
        color: "#ffffff",
        pt: 7.5,
        pb: 7.5,
        mt: 10,
      }}
    >
      <Grid container spacing={4}>
        <Grid item lg={5}>
          <Typography component="h4" variant="h6">
            Apparently, our inspiration has always been running alongside us.
          </Typography>
        </Grid>
        <Grid item lg={7}>
          <Typography component="p" variant="body1">
            When we created our "pony" kits, we had no idea that this little
            endeavor could grow into something bigger. There's so much more to
            come because we have so many ideas in our heads. We are fully
            committed to Hunting Pony. We love what we do. It fills us with
            inspiration and enthusiasm.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
