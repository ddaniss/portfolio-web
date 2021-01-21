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

// const VerticalMenu = ({ open }) => {
//   return (
//     <VMenu open={open}>
//       <VMenuItem href="#about">SOBRE MÍ</VMenuItem>
//       <VMenuItem href="#tecnologías">TECNOLOGÍAS</VMenuItem>
//       <VMenuItem href="#portfolio">PORTFOLIO</VMenuItem>
//       <VMenuItem href="#contacto">CONTACTO</VMenuItem>
//     </VMenu>
//   );
// };

// export default VerticalMenu;
