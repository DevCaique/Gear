// ==================================================================================================== //

// Imports
import styled from "styled-components";

// Components
import { Link } from "react-router-dom";

// Styles
import { SIZES } from "../../GlobalStyle";

// ==================================================================================================== //

// Header
export const Header = styled.header``;

// Navbar Container
export const NavbarContainer = styled.div`
  width: 100vw;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  height: ${SIZES.paddingNormal};
  max-width: 100%;
  padding-inline: ${SIZES.paddingSmall};
  background-color: #202020;

  & span {
    color: white;
    cursor: pointer;
  }
`;

// Menu List
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: absolute;
  height: 100vh;
  inset: 0 auto 0 0;
  padding-inline: ${SIZES.paddingSmall};
  background-color: #303030;
  width: 20rem;
  transition: 0.5s;
  transform: ${(props) =>
    props.active ? "translateX(0%)" : "translateX(-100%)"};

  & > div {
    position: absolute;
    top: 0;
    height: ${SIZES.paddingNormal};
    display: flex;
    align-items: center;
    left: 0;
    margin-left: ${SIZES.paddingSmall};
  }
`;

// NavButton
export const NavButton = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.75em 0 2em;
  width: 100%;
  gap: 1em;

  &:first-of-type {
    margin-top: ${SIZES.paddingMedium};
  }

  &:hover {
    font-weight: 500;
    font-size: 0.85rem;
  }
`;

// Search Input
export const Input = styled.input`
  width: 35rem;
  padding: 1em;
  margin-inline: 1em;
  border: none;
  background-color: #121212;
  outline: none;
  color: #ffffff;
`;

// ==================================================================================================== //
