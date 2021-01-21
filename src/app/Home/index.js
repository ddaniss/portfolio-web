import React from "react";
import {
  Container,
  MoonContainer,
  HomeContainer,
  Subtitle,
  Title,
  ContactButton,
} from "./style";

function Home() {
  return (
    <HomeContainer>
      <MoonContainer />
      <Container>
        <Title>
          Douglas Daniel
          <br />
          Sulbarán Socas
        </Title>
        <Subtitle>DESARROLLADOR WEB</Subtitle>
        <ContactButton>CONTACTO</ContactButton>
      </Container>
    </HomeContainer>
  );
}

export default Home;
