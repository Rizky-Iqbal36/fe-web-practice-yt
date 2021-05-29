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
          <SideBarLink to="japan" onClick={toggle}>
            にゃん
          </SideBarLink>
          <SideBarLink to="china" onClick={toggle}>
            miao
          </SideBarLink>
          <SideBarLink to="urdu" onClick={toggle}>
            miyāʾūṉ
          </SideBarLink>
          <SideBarLink to="rusia" onClick={toggle}>
            miyau
          </SideBarLink>
        </SideBarMenu>
        <SideBarBtnWrap>
          <SideBarRoute to="/indonesia">meong</SideBarRoute>
        </SideBarBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
