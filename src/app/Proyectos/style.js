import styled from "styled-components";

export const ProjectsContainer = styled.section`
  height: fit-content;
  width: 100%;
  margin-top: -100px;

  padding-top: 100px;
`;

export const Title = styled.h3`
  font-size: 36px;
  color: #000;
  font-family: "Playfair Display", serif;
  font-weight: 100;
  text-align: center;
  padding: 2rem 0;
`;

export const ProjectGallery = styled.div`
  width: 100%;
  /* border: 3px solid orange; */

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  padding: 0 3rem;
`;

export const ProjectCard = styled.div``;

export const Picture = styled.img`
  height: auto;
  width: 100%;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in;
  /* border: 3px solid red; */

  &:hover {
    filter: grayscale(0%);
  }
`;

export const InfoContainer = styled.div`
  /* border: 3px solid blue; */
`;

export const Name = styled.h4`
  margin-bottom: 1rem;
  font-size: 30px;
`;

export const Description = styled.p`
  text-align: justify;
  margin: 0.8rem 0;
`;

export const TechContainer = styled.div`
  margin-bottom: 3rem;
`;

export const Links = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  background: none;
  border: 0;
  padding: 0.2em 0.5em;
  margin-bottom: 0.2rem;
  margin-right: 0.3rem;
  width: 5em;
  font-weight: 400;
  font-family: "Playfair Display", serif;

  color: #000;
  border: 2px solid #000;
  outline: 2px solid #000;
  outline-offset: -2px;
  transition: outline-offset 250ms ease;

  &:hover {
    outline-offset: -5px;
  }
`;

export const TechTitle = styled.h5`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 16px;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const TechName = styled.p`
  font-size: 14px;

  background-color: #000;
  color: #fff;
  width: fit-content;
  display: inline;
  margin: 0 0.1rem;
  padding: 0 0.4rem;
`;
