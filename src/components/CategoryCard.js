import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function CategoryCard({title, image}) {
  return (
    <Grid item lg={3} md={6} xs={12}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
          <CardMedia component="img" height="420" image={image} alt="" />
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CategoryCard;