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
  font-family: "Kanit", sans-serif;
  font-weight: 100;
  text-align: center;
  padding: 3rem 0;
`;

export const ProjectGallery = styled.div`
  width: 100%;
  /* border: 3px solid orange; */

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  padding: 0 2rem;

  @media (min-width: 850px) {
    width: 60%;
    margin: 0 auto;
    /* display: grid; */
    /* grid-gap: 1rem; */
    /* grid-template-columns: repeat(auto-fit, minmax(40%, 1fr)); */
  }
`;

export const ProjectCard = styled.div`
  @media (min-width: 850px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const Picture = styled.img`
  height: auto;
  width: 100%;
`;

export const InfoContainer = styled.div`
  /* border: 3px solid blue; */
`;

export const Name = styled.h4`
  margin-bottom: 1rem;
  font-size: 20px;
  font-style: italic;
`;

export const Description = styled.p`
  text-align: left;
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
