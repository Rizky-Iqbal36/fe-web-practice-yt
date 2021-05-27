import React from "react";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SideBarBtnWrap,
  SideBarLink,
  SideBarRoute,
  SideBarWrapper,
  SideBarMenu,
} from "./sideBar.element";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>
            Sign Up
          </SideBarLink>
        </SideBarMenu>
        <SideBarBtnWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideBarBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
