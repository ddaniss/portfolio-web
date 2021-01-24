import styled from "styled-components";

export const VMenu = styled.ul`
  background-color: #000;
  min-height: fit-content;

  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;
  width: 100%;
  z-index: -10;
  list-style: none;

  display: flex;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.8s ease-in-out;

  align-items: center;
  flex-flow: column nowrap;
  position: absolute;
  left: 0;
`;

export const VMenuItem = styled.a`
  padding: 1.5rem;
  text-decoration: none;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
  position: relative;

  margin: 0 auto;
  margin-top: 3em;

  &:nth-child(1) {
    margin-top: 10em;
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

  &:hover::after {
    width: 100%;
  }

  &:focus::after {
    width: 100%;
  }
`;
