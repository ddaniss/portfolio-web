import styled from "styled-components";

export const AboutContainer = styled.section`
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -100px;

  @media (min-width: 1485px) {
    flex-direction: row;
    max-height: 100vh;
  }
`;

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 50vh;

  @media (min-width: 1485px) {
    height: 100vh;
    width: 50%;
  }
`;

export const Title = styled.h3`
  font-size: 36px;
  color: #000;
  font-family: "Playfair Display", serif;
  font-weight: 100;
  /* font-style: italic; */
  margin-bottom: 0.5em;
  padding: 0 2rem;
  @media (min-width: 1485px) {
    padding: 0 8rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #000;
  text-align: justify;
  line-height: 250%;
  padding: 0 2rem;

  @media (min-width: 1485px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const PortraitContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-color: #808080;

  @media (min-width: 1485px) {
    width: 350px;
    height: 350px;
  }
`;
