import * as React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import dog1 from "./assets/img/dog1.jpeg";
import dog2 from "./assets/img/dog2.jpeg";
import dog3 from "./assets/img/dog3.jpeg";
import dog4 from "./assets/img/dog4.jpeg";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Measuring from "./components/Measuring";
import Footer from "./components/Footer";

const CARDS = [
  { title: "LEASHES", image: dog1 },
  { title: "RAINCOAT", image: dog2 },
  { title: "BEDS", image: dog3 },
  { title: "COLLARS", image: dog4 },
];

export default function App() {
  return (
    <Container disableGutters="true" maxWidth="lg">
      <Header />
      <MainSection />
      <Catalog cards={CARDS} />
      <About />
      <Measuring />
      <Footer />
    </Container>
  );
}
