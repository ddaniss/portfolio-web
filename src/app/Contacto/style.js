import styled from "styled-components";
import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";

export const ContactContainer = styled.section`
  height: 88vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  margin-top: 100px;
  z-index: 0;

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: #fff;
  }
  @media (min-width: 1485px) {
    height: 100vh;
    margin-top: 100px;
  }
`;

export const FormContainer = styled.div`
  height: 50%;
  display: flex;
  flex-flow: column nowrap;
  /* border: 1px solid pink; */

  @media (min-width: 1485px) {
    height: 100%;
    width: 50%;
    margin: 0 auto;
    padding-top: 100px;
  }
`;

export const LinksContainer = styled.div`
  height: 50%;
  display: flex;
  flex-flow: column nowrap;
  /* border: 1px solid pink; */
  padding-top: 11rem;

  @media (min-width: 1485px) {
    height: 27%;
    padding-top: 5rem;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 46px;
  font-weight: 10;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  font-weight: 100;

  @media (min-width: 1485px) {
    padding: 3rem 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5em;

  @media (min-width: 1485px) {
    height: 100%;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 1em 0.5em;
  width: 80%;
  margin: 0 auto;
  border: none;
  border-radius: 3px;
`;

export const Mensaje = styled.textarea`
  font-size: 18px;
  padding: 1em 0.5em;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  min-height: 125px;
  resize: none;
  border: none;
  border-radius: 3px;

  @media (min-width: 1485px) {
    height: 250px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  font-size: 22px;
  line-height: 1;
  background: none;
  padding: 0.8rem 1.5rem;
  margin: 0 auto;
  width: 45%;
  font-weight: 100;

  color: #fff;
  border: 2px solid #fff;
  outline: 2px solid #fff;
  outline-offset: -2px;
  transition: outline-offset 250ms ease;

  &:hover {
    outline-offset: -6px;
  }
`;

export const ContactLink = styled.a`
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  margin-top: 0.7em;

  display: grid;
  place-content: center;

  /* @media (min-width: 1485px) {
    transform: rotate(-270deg);
  } */
`;

export const GithubLink = styled(GithubSquare)`
  color: #fff;
  height: auto;
  width: 25px;

  @media (min-width: 575px) {
    width: 40px;
  }
  @media (min-width: 1485px) {
    width: 40px;
  }
`;

export const LinkedinLink = styled(Linkedin)`
  color: #fff;
  height: auto;
  width: 25px;

  @media (min-width: 575px) {
    width: 40px;
  }
  @media (min-width: 1485px) {
    width: 40px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  padding: 0 8rem;
  align-items: center;

  @media (min-width: 575px) {
    padding: 0;
    padding-bottom: 1rem;
    width: 100px;
    margin: 0 auto;
  }
  @media (min-width: 1485px) {
    padding: 0;
    padding-bottom: 1rem;
    width: 100px;
    margin: 0 auto;
  }
`;
