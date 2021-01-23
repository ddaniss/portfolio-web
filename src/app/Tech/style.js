import styled from "styled-components";

export const TechContainer = styled.section`
  height: 100vh;
  width: 100%;
  /* background-image: url("./images/bgTech.jpg");
  background-position: start; */
  background-color: #1119;
  padding: 10em 0;
  margin-top: -100px;
  @media (min-width: 1485px) {
    max-height: 100vh;
    background-color: #0000;
  }
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-column-gap: 0rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-top: 2rem;
  @media (min-width: 1485px) {
    grid-gap: 4rem 5rem;
    width: 65%;
    margin: 0 auto;
    margin-top: 8rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;

  @media (min-width: 1485px) {
    font-size: 24px;
  }
`;

export const Title = styled.h3`
  font-size: 26px;
  color: #fff;
  width: fit-content;
  text-justify: center;
  margin: 0 auto;
  margin-top: -2rem;
  margin-bottom: 3.5rem;
  font-family: "Playfair Display", serif;
  font-weight: 100;
  @media (min-width: 1485px) {
    margin-top: 2rem;
    font-size: 38px;
  }
`;
