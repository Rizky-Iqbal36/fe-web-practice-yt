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
          <SideBarLink href="#japan" onClick={toggle}>
            Nyan
          </SideBarLink>
          <SideBarLink href="#china" onClick={toggle}>
            Miao
          </SideBarLink>
          <SideBarLink href="#urdu" onClick={toggle}>
            Miyāʾūṉ
          </SideBarLink>
          <SideBarLink href="#rusia" onClick={toggle}>
            Miyau
          </SideBarLink>
        </SideBarMenu>
        <SideBarBtnWrap>
          <SideBarRoute to="/indonesia">Meong</SideBarRoute>
        </SideBarBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
