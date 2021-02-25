import React from "react";
import {
  AboutContainer,
  Container,
  PortraitContainer,
  Title,
  Paragraph,
} from "./style";

function About() {
  return (
    <AboutContainer id="about">
      <Container>
        <PortraitContainer />
      </Container>
      <Container>
        <Title>Sobre mí</Title>
        <Paragraph>
          He realizado el Certificado Profesional de Desarrollo de Aplicaciones
          con Tecnologías Web. Uso React y Laravel para crear aplicaciones.
        </Paragraph>
      </Container>
    </AboutContainer>
  );
}

export default About;
