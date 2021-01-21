import styled from "styled-components";

export const VMenu = styled.ul`
  background-color: #000;
  min-height: fit-content;
  height: 100vh;
  width: 100%;
  z-index: -10;
  list-style: none;

  display: ${({ open }) => (open ? "flex" : "none")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s linear;

  align-items: center;
  flex-flow: column nowrap;
  position: absolute;
  left: 0;
  animation: all 1s ease;
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
    margin-top: 5em;
  }

  &::after {
    scale: 0;
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -4.5px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #fff;
    scale: 1;
  }

  &:focus {
    outline: none;
  }

  &:focus::after {
    content: "";
    position: absolute;
    bottom: -34.5px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #fff;
    scale: 1;
  }
`;

const VerticalMenu = ({ open }) => {
  return (
    <VMenu open={open}>
      <VMenuItem href="#about">SOBRE MÍ</VMenuItem>
      <VMenuItem href="#tecnologías">TECNOLOGÍAS</VMenuItem>
      <VMenuItem href="#portfolio">PORTFOLIO</VMenuItem>
      <VMenuItem href="#contacto">CONTACTO</VMenuItem>
    </VMenu>
  );
};

export default VerticalMenu;
