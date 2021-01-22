import styled from "styled-components";

export const ContactContainer = styled.section`
  height: 100vh;
  display: flex;
  background-color: #000;
  margin-top: -100px;
  z-index: 0;
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

export const Form = styled.form``;

export const Input = styled.input``;

export const Title = styled.h3`
  color: #fff;
`;
