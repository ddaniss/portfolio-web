import styled from "styled-components";

export const AboutContainer = styled.section`
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -100px;
`;

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 50vh;
`;

export const Title = styled.h3`
  font-size: 36px;
  color: #000;
  font-style: italic;
  margin-bottom: 0.5em;
  padding: 0 2rem;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #000;
  text-align: justify;
  line-height: 250%;
  padding: 0 2rem;
`;

export const PortraitContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-color: #808080;
`;
