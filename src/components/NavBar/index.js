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

const NavBar = ({ toggle, HomeObj }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    window.scrollY >= 560 ? setScrollNav(true) : setScrollNav(false);
  };

  let mainNavLinks = Array.from(
    document.querySelectorAll("#navbar div ul li a")
  );

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  window.addEventListener("scroll", (event) => {
    mainNavLinks.forEach((link, index) => {
      let currentPosition = window.scrollY;
      let nextSectionOffsetTop = HomeObj[index].offsetTop;
      if (index < mainNavLinks.length - 1) {
        nextSectionOffsetTop = HomeObj[index + 1].offsetTop;
      } else {
        nextSectionOffsetTop = 3064;
      }

      let currentSectionOffsetTop = HomeObj[index].offsetTop;

      if (
        currentPosition >= currentSectionOffsetTop &&
        currentPosition < nextSectionOffsetTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  return (
    <>
      <Nav scrollNav={scrollNav} id="navbar">
        <NavBarContainer>
          <NavLogo
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Stardenburdenhardenbart
          </NavLogo>
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
            <NavBtnLink to="/indonesia">Meong</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
