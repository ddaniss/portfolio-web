import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;

  background-color: #000;
  height: 100px;
  width: 100%;
  padding: 1.5em 6em;
  /* margin-top: -100px; */

  position: sticky;
  top: 0;
  left: 0;
`;

export const Logo = styled.a`
  text-decoration: none;
  font-size: 45px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: solid;
    padding: 0.1em;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  @media (max-width: 1095px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  font-size: 22px;
  color: #fff;
  cursor: pointer;
  position: relative;

  margin-left: 4em;
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
