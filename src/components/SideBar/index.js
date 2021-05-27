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

const SideBar = () => {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="discover">Discover</SideBarLink>
          <SideBarLink to="services">Services</SideBarLink>
          <SideBarLink to="signup">Sign Up</SideBarLink>
        </SideBarMenu>
        <SideBarBtnWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideBarBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
