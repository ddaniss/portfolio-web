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
              <i>"Entradas"</i> es un blog hecho para reforzar los conocimientos
              de MySQL y PHP. Con registro de usuarios y comentarios.
            </Description>
            <TechContainer>
              <Links
                href="https://entradas.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web
              </Links>
              <Links
                href="https://github.com/ddaniss/entradas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </Links>
              <TechTitle>Tecnologías usadas:</TechTitle>
              <TechName>HTML</TechName>
              <TechName>CSS</TechName>
              <TechName>MySQL</TechName>
              <TechName>PHP</TechName>
            </TechContainer>
          </InfoContainer>
        </ProjectCard>
        <ProjectCard>
          <Name>Calculadora</Name>
          <Picture src="./images/calculadora-mockup.jpg" />
          <InfoContainer>
            <Description>
              Proyecto para reforzar los conocimientos de SCSS y Javascript.
            </Description>
            <TechContainer>
              <Links
                href="https://ddss-calculadora.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web
              </Links>
              <Links
                href="https://github.com/ddaniss/calculadora"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </Links>
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
              <Links
                href="https://ddss.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web
              </Links>
              <Links
                href="https://github.com/ddaniss/portfolio-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </Links>
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
