import styled from "styled-components";

export const TechContainer = styled.section`
  height: fit-content;
  width: 100%;
  /* background-image: url("./images/bgTech.jpg");
  background-position: start; */
  background-color: #1119;
  padding: 10em 1.85em;
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
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  @media (min-width: 575px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 2rem 0rem;
    width: 65%;
    margin: 0 auto;
  }
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
  font-size: 36px;
  color: #fff;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  /* margin-top: 2rem; */
  margin-bottom: 4.5rem;
  font-family: "Kanit", sans-serif;
  font-weight: 100;
  @media (min-width: 575px) {
    margin-top: 2rem;
    font-size: 38px;
  }
  @media (min-width: 1485px) {
    margin-top: 2rem;
    font-size: 38px;
  }
`;
