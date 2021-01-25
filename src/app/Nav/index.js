import React from "react";
import Burger from "./Burger";
import { Header, Logo, Logo2, Menu, MenuItem } from "./style";

function Nav() {
  return (
    <Header>
      <Logo>DS</Logo>
      <Logo2 href="/">DS</Logo2>
      <Burger />
      <Menu>
        <MenuItem href="#about">Sobre mí</MenuItem>
        <MenuItem href="#tecnologías">Tecnologías</MenuItem>
        <MenuItem href="#portfolio">Portfolio</MenuItem>
        <MenuItem href="#contacto">Contacto</MenuItem>
      </Menu>
    </Header>
  );
}

export default Nav;
