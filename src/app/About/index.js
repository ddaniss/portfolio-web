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
          et ultrices ut, elementum eu dui. Aliquam vel arcu nec tortor feugiat
          facilisis. Sed ac placerat ipsum, accumsan egestas erat. In fringilla
          nunc et blandit rutrum. Quisque iaculis ac tortor ac blandit. Nunc in
          augue pharetra, ullamcorper lacus ac, laoreet justo. In hac habitasse
          platea dictumst. Nulla vitae eleifend lacus, ut tincidunt lorem.
        </Paragraph>
      </Container>
    </AboutContainer>
  );
}

export default About;
