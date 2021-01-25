import styled from "styled-components";

export const AboutContainer = styled.section`
  height: 100vh;
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
  padding-top: 10em;

  @media (min-width: 575px) {
    height: 50vh;
    width: 50%;
    margin: 0 auto;
  }
  @media (min-width: 1485px) {
    height: 100vh;
    width: 20%;
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

  margin-top: -150px;

  /* @media (min-width: 575px) {
    margin-top: -300px;
  } */
  @media (min-width: 1485px) {
    padding-left: 4.3rem;
    margin-top: 0px;
    margin-left: -400px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #000;
  text-align: left;
  line-height: 1.5rem;
  padding: 0 2rem;

  margin-top: -90px;

  /* @media (min-width: 575px) {
    width: 100%;
    margin-top: -250px;
  }

  @media (min-width: 575px) {
    width: 100%;
    margin-top: -250px;
  } */
  @media (min-width: 1485px) {
    width: 140%;
    margin: 0 auto;
    margin-top: 0px;
    margin-left: -360px;
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

  @media (min-width: 1485px) {
    width: 400px;
    height: 400px;
  }
`;
