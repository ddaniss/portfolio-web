import React from "react";
import {
  Container,
  MoonContainer,
  HomeContainer,
  Subtitle,
  Title,
  ContactButton,
  Arrow,
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
      <a href="#about">
        <Arrow />
      </a>
    </HomeContainer>
  );
}

export default Home;
