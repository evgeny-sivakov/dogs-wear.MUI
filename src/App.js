import * as React from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import MainSection from './components/MainSection';

export default function App() {
  return (
    <Container disableGutters='true' maxWidth="lg">
      <Header />
      <MainSection />
    </Container>
  );
}
