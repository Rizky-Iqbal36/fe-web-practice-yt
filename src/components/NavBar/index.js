import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navBar.element";
// https://www.yahoo.com/news/15-words-kitten-other-languages-232125829.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAIv4Fv8wQCn1GCClEw6Rd_pth5aMbg2pe9DrII8eWuOrWmWHrVbAuv_xkrq2Bm28j4QiY4NxKWE1eW2jWvp_p7knTj1xTgRacixUCLOgdQsqmmnyTUQnY9RUOBIVX3RzUMsViXLKtAogniMk7Usxk_JNwJ75KjJrxexwAPVUC3cO
// https://en.wikipedia.org/wiki/Meow#Spelling

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 560 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo href="#home">Stardenburdenhardenbart</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="#japan">Nyan</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#china">Miao</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#urdu">Miyāʾūṉ</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#rusia">Miyau</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="#indonesia">Meong</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
