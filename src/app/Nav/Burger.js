import React, { useState } from "react";
import styled from "styled-components";
import { VMenu, VMenuItem } from "./VerticalMenu";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 33px;
  right: 35px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  @media (min-width: 1095px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 1px;
    background-color: #fff;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {/* <VerticalMenu open={open} /> */}
      <VMenu open={open}>
        <VMenuItem onClick={() => setOpen(!open)} href="#about">
          SOBRE MÍ
        </VMenuItem>
        <VMenuItem onClick={() => setOpen(!open)} href="#tecnologías">
          TECNOLOGÍAS
        </VMenuItem>
        <VMenuItem onClick={() => setOpen(!open)} href="#portfolio">
          PORTFOLIO
        </VMenuItem>
        <VMenuItem onClick={() => setOpen(!open)} href="#contacto">
          CONTACTO
        </VMenuItem>
      </VMenu>
    </>
  );
};

export default Burger;
