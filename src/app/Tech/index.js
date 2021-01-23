import React from "react";
import { Parallax } from "react-parallax";
import {
  CssIcon,
  ReactIcon,
  StyledComponentsIcon,
  Html5Icon,
  JsIcon,
  PhpIcon,
  LaravelIcon,
  PythonIcon,
  DjangoIcon,
  LinuxIcon,
} from "../../shared/icons";
import {
  IconContainer,
  IconsContainer,
  TechContainer,
  Title,
  Name,
} from "./style";

const image = "./images/bgTech.jpg";

function Tech() {
  return (
    <Parallax bgImage={image} strength={400}>
      <TechContainer id="tecnologías">
        <Title>TECNOLOGÍAS QUE USO</Title>
        <IconsContainer>
          <IconContainer>
            <Html5Icon />
            <Name>HTML</Name>
          </IconContainer>
          <IconContainer>
            <CssIcon />
            <Name>CSS</Name>
          </IconContainer>
          <IconContainer>
            <JsIcon />
            <Name>Javascript</Name>
          </IconContainer>
          <IconContainer>
            <LinuxIcon />
            <Name>Linux</Name>
          </IconContainer>
          <IconContainer>
            <ReactIcon />
            <Name>React</Name>
          </IconContainer>
          <IconContainer>
            <StyledComponentsIcon />
            <Name>
              Styled <br /> Components
            </Name>
          </IconContainer>
          <IconContainer>
            <PhpIcon />
            <Name>PHP</Name>
          </IconContainer>
          <IconContainer>
            <LaravelIcon />
            <Name>Laravel</Name>
          </IconContainer>
          <IconContainer>
            <PythonIcon />
            <Name>Python</Name>
          </IconContainer>
          <IconContainer>
            <DjangoIcon />
            <Name>Django</Name>
          </IconContainer>
        </IconsContainer>
      </TechContainer>
    </Parallax>
  );
}

export default Tech;
