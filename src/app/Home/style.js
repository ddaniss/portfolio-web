import styled from "styled-components";

export const HomeContainer = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  @media (min-width: 1485px) {
    flex-flow: row-reverse;
  }
`;

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 58.85vh;
  padding-bottom: 9em;
  @media (min-width: 1485px) {
    height: calc(100vh - 100px);
    padding: 0;
    padding-left: 10em;
    width: 50%;
  }
`;

export const MoonContainer = styled(Container)`
  background-image: url("images/bgMoon.png");
  background-size: 110%;
  background-position: start;
  background-repeat: no-repeat;
  background-position: 40% 70%;
  height: 30vh;
  @media (min-width: 1485px) {
    width: 70vw;
    height: calc(100vh - 100px);
    background-size: cover;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 100;
  line-height: 1.05em;
  letter-spacing: -3px;
  @media (min-width: 1485px) {
    font-size: 74px;
  }
`;

export const Subtitle = styled.p`
  color: #4d4946;
  font-size: 32.65px;
  font-weight: 100;
  font-family: "Kanit", sans-serif;
  line-height: 1.3em;
  letter-spacing: -1.6px;
  @media (min-width: 1485px) {
    font-size: 49.45px;
  }
`;

export const ContactButton = styled.button`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  font-size: inherit;
  line-height: 1;
  background: none;
  border: 0;
  padding: 1em 1.5em;
  margin-top: 1.5em;
  width: 50%;

  color: #fff;
  border: 2px solid #fff;
  outline: 2px solid #fff;
  outline-offset: -2px;
  transition: outline-offset 250ms ease;

  &:hover {
    outline-offset: -6px;
  }
`;
