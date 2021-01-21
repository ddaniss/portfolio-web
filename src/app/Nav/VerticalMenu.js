import styled from "styled-components";

// export const Header = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-content: center;

//   background-color: #000;
//   height: 100px;
//   width: 100%;
//   padding: 1.5em 6em;

//   position: sticky;
//   top: 0;
//   left: 0;

//   @media (max-width: 768px) {
//     justify-content: unset;
//     flex-flow: column nowrap;
//     height: 100vh;
//   }
// `;

// export const Logo = styled.a`
//   text-decoration: none;
//   font-size: 45px;
//   font-weight: 400;
//   color: #fff;
//   cursor: pointer;

//   &:focus {
//     outline: solid;
//     padding: 0.1em;
//   }
// `;

export const VMenu = styled.ul`
  background-color: #000;
  height: 100vh;
  width: 100%;
  z-index: -10;
  list-style: none;
  display: ${({ open }) => (open ? "flex" : "none")};
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
  margin-top: 5em;
  transition: scale 1s ease-in-out;

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
