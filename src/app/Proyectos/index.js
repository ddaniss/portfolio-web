import React from "react";
import {
  Description,
  InfoContainer,
  Links,
  Name,
  Picture,
  ProjectCard,
  ProjectGallery,
  ProjectsContainer,
  TechContainer,
  TechName,
  TechTitle,
  Title,
} from "./style";

function Proyectos() {
  return (
    <ProjectsContainer id="portfolio">
      <Title>Portfolio</Title>
      <ProjectGallery>
        <ProjectCard>
          <Name>Entradas</Name>
          <Picture src="./images/entradas-mockup.jpg" />
          <InfoContainer>
            <Description>
              "Entradas" es un blog hecho para reforzar los conocimientos de
              MySQL y PHP. Con registro de usuarios y comentarios.
            </Description>
            <TechContainer>
              <Links>Web</Links>
              <Links>Código</Links>
              <TechTitle>Tecnologías usadas:</TechTitle>
              <TechName>HTML</TechName>
              <TechName>CSS</TechName>
              <TechName>MySQL</TechName>
              <TechName>PHP</TechName>
            </TechContainer>
          </InfoContainer>
        </ProjectCard>
        <ProjectCard>
          <Name>Calculadura</Name>
          <Picture src="./images/calculadora-mockup.jpg" />
          <InfoContainer>
            <Description>
              Proyecto para reforzar los conocimientos de SCSS y Javascript.
            </Description>
            <TechContainer>
              <Links>Web</Links>
              <Links>Código</Links>
              <TechTitle>Tecnologías usadas:</TechTitle>
              <TechName>HTML</TechName>
              <TechName>SCSS</TechName>
              <TechName>Javascript</TechName>
            </TechContainer>
          </InfoContainer>
        </ProjectCard>
        <ProjectCard>
          <Name>Portfolio web</Name>
          <Picture src="./images/portfolio-mockup.jpg" />
          <InfoContainer>
            <Description>
              Este portfolio ha sido creado usando React, Styled Components y
              otras varias librerías de React.
            </Description>
            <TechContainer>
              <Links>Web</Links>
              <Links>Código</Links>
              <TechTitle>Tecnologías usadas:</TechTitle>
              <TechName>React</TechName>
              <TechName>Styled Components</TechName>
              <TechName>HTML</TechName>
              <TechName>CSS</TechName>
            </TechContainer>
          </InfoContainer>
        </ProjectCard>
      </ProjectGallery>
    </ProjectsContainer>
  );
}

export default Proyectos;
