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
  top: -3px;
  left: 0;
  z-index: 9999;

  @media (max-width: 1485px) {
    padding-top: 1.2em;
    padding-left: 2.3em;
  }
`;

export const Logo = styled.p`
  text-decoration: none;
  font-size: 35px;
  font-weight: 100;
  color: #fff;
  cursor: pointer;
  font-family: "Playfair Display", serif;

  transition: all 0.2s ease-in;
`;

export const Logo2 = styled.a`
  text-decoration: none;
  font-size: 35px;
  font-weight: 100;
  color: #fff;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  position: absolute;
  z-index: 999;

  transition: all 0.2s ease-in;

  &:hover {
    letter-spacing: 42px;
    margin-left: -23px;
    font-weight: 100;
  }

  &:focus {
    outline: none;
    letter-spacing: 42px;
    margin-left: -23px;
    font-weight: 100;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding-right: 1.8rem;

  @media (max-width: 1095px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  position: relative;
  font-family: "Kanit", sans-serif;
  font-weight: 100;

  margin-left: 4em;

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
