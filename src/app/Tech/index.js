import React from "react";
import { Parallax } from "react-parallax";
import {
  CssIcon,
  ReactIcon,
  Html5Icon,
  JsIcon,
  PhpIcon,
  LaravelIcon,
  PythonIcon,
  DjangoIcon,
  LinuxIcon,
  MysqlIcon,
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
        <Title>Tecnologías que uso</Title>
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
            <ReactIcon />
            <Name>React</Name>
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
            <LinuxIcon />
            <Name>Linux</Name>
          </IconContainer>
          <IconContainer>
            <MysqlIcon />
            <Name>MySQL</Name>
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
