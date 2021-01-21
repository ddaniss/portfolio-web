import React from "react";
import { Header, Logo, Menu, MenuItem } from "./style";

function Nav() {
  return (
    <Header>
      <Logo href="#home">DS</Logo>
      <Menu>
        <MenuItem href="#about">SOBRE MÍ</MenuItem>
        <MenuItem href="#tecnologías">TECNOLOGÍAS</MenuItem>
        <MenuItem href="#portfolio">PORTFOLIO</MenuItem>
        <MenuItem href="#contacto">CONTACTO</MenuItem>
      </Menu>
    </Header>
  );
}

export default Nav;
