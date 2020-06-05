import React from "react";
import styled from "styled-components";
import { romalLichtBlauw } from "../../Styles/colors";
import { title } from "../../Styles/title";
import Romallogo from "../../Assets/Images/romal-logo.JPG";

const NavbarStyled = styled.div`
  background-color: ${romalLichtBlauw};
  // padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(title)`
  display: inline;
  font-size: 50px;
  padding-left: 20px;
  color: white;
  text-shadow: 1px 1px 4px grey;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        <img src={Romallogo} alt="romal-logo" />
      </Logo>
      <Logo>KABELCONFIGURATOR</Logo>
    </NavbarStyled>
  );
}
