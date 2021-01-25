import styled from "styled-components";
import { ArrowDown } from "@styled-icons/feather/ArrowDown";

export const HomeContainer = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  @media (min-width: 1045px) {
    flex-flow: row-reverse;
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #fff;
  }
`;

export const Arrow = styled(ArrowDown)`
  height: 50px;
  width: auto;
  bottom: 25px;
  left: 47%;
  position: absolute;
  /* @media (min-width: 1045px) {
    left: 50%;
  } */
`;

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 58.85vh;
  padding-bottom: 8.5em;
  @media (min-width: 1045px) {
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
  background-position: 40% 65%;
  height: 30vh;
  @media (min-width: 1045px) {
    width: 70vw;
    height: calc(100vh - 100px);
    background-position: 40% 20%;
    background-size: cover;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 100;
  line-height: 1.05em;
  font-family: "Playfair Display", serif;
  white-space: nowrap;

  @media (min-width: 1045px) {
    font-size: 60px;
  }
  @media (max-width: 1350px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  color: #4d4946;
  font-size: 32.65px;
  font-weight: 200;
  font-family: "Kanit", sans-serif;
  line-height: 1.3em;
  white-space: nowrap;

  /* letter-spacing: -1.6px; */
  @media (min-width: 1045px) {
    font-size: 40.5px;
  }
  @media (max-width: 1350px) {
    font-size: 27px;
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-size: 22px;
  line-height: 1.2;
  background: none;
  border: 0;
  padding: 0.8rem 1.5rem;
  margin-top: 1.5em;
  width: fit-content;
  font-weight: 400;
  font-family: "Playfair Display", serif;

  color: #fff;
  border: 2px solid #fff;
  outline: 2px solid #fff;
  outline-offset: -2px;
  transition: outline-offset 250ms ease;

  &:hover {
    outline-offset: -6px;
  }

  &:focus {
    outline-offset: -6px;
  }

  @media (min-width: 1045px) {
    font-size: 16px;
  }
  @media (max-width: 1350px) {
    font-size: 12px;
  }
`;
