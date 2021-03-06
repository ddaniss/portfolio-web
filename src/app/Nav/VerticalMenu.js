import styled from "styled-components";

export const VMenu = styled.ul`
  background-color: #000;
  min-height: fit-content;

  position: fixed;
  top: 0;
  right: 0;

  min-height: 100vh;
  height: fit-content;
  width: 100%;
  z-index: -10;
  list-style: none;

  display: flex;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-250%)")};
  transition: transform 0.6s ease-in-out;

  align-items: center;
  flex-flow: column nowrap;
  position: absolute;
  left: 0;
  /* 
  @media (min-height: 950px) {
    flex-flow: row wrap;
  } */
`;

export const VMenuItem = styled.a`
  padding: 1.5rem;
  text-decoration: none;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
  position: relative;

  margin: 0 auto;
  margin-top: 2.5em;

  &:nth-child(1) {
    margin-top: 5em;
  }

  &:focus {
    outline: none;
  }

  &::after {
    transition: all 0.3s ease-in;
    content: "";
    position: absolute;
    bottom: -1.5px;
    right: -1.5px;
    background-color: #fff;
    height: 0.9px;
    width: 0%;
  }

  /* &:hover::after {
    width: 100%;
  }

  &:focus::after {
    width: 100%;
  } */
`;
