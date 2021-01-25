import styled from "styled-components";

export const AboutContainer = styled.section`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -100px;

  @media (min-width: 1045px) {
    flex-direction: row;
    /* max-height: 100vh; */
  }
`;

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 50vh;
  padding: 0 2em;
  padding-top: 10em;

  @media (min-width: 575px) {
    height: 50vh;
    width: 50%;
    margin: 0 auto;
  }
  @media (min-width: 1045px) {
    height: 100vh;
    width: 50%;
  }
`;

export const Title = styled.h3`
  font-size: 36px;
  color: #000;
  font-family: "Playfair Display", serif;
  font-weight: 100;
  padding-bottom: 3em;

  margin-top: -53%;

  @media (min-width: 1045px) {
    align-self: flex-end;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #000;
  text-align: left;
  line-height: 1.5rem;

  margin-top: -40%;

  @media (min-width: 1045px) {
    width: 70%;
    align-self: flex-end;
  }
`;

export const PortraitContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-color: #808080;
  background-image: url("./images/ddss.jpeg");
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);

  @media (min-width: 1045px) {
    width: 400px;
    height: 400px;
  }
`;
