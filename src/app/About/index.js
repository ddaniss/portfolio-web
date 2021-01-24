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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tristique eros at diam facilisis dignissim. Nulla arcu sem, dignissim
          et ultrices ut, elementum eu dui.
        </Paragraph>
      </Container>
    </AboutContainer>
  );
}

export default About;
