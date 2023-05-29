import { Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";

function Catalog({ cards }) {
  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <CategoryCard title={card.title} image={card.image} />
      ))}
    </Grid>
  );
}

export default Catalog;
